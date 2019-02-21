import axios from "axios";
import { parse as parseXml } from "fast-xml-parser";
import * as ICAL from "ical.js";
import {
  GoogleCalendarItems,
  GoogleCalendarItem,
} from "../types/googleCalendar";
import { parse } from "url";

export interface Event {
  id: string;
  name: string;
  location: string;
  url?: string;
  startDate: Date;
  endDate: Date;
  source: string;
  description?: string;
}

type Fetcher = (name: string) => Promise<Event[]>;

interface EventSource {
  name: string;
  fetcher: Fetcher;
}

// todo: cache results

/**
 * Places where we get events from
 */
const eventSources: EventSource[] = [
  {
    name: "Acadiana Software Group Calendar",
    fetcher: fetchFromGoogleCalendar(
      process.env.GOOGLE_CALENDAR_ID,
      process.env.GOOGLE_CALENDAR_API_KEY
    ),
  },
  {
    name: "AWS Lafayette",
    fetcher: fetchFromICal("https://www.meetup.com/AWS-Lafayette/events/ical/"),
  },
];

/**
 * Get all events from all sources
 */
export async function listEvents(): Promise<Event[]> {
  // build an array of promises from all event sources
  const fetches = eventSources.map(source => {
    return source.fetcher(source.name);
  });

  // fetch data in parallel
  const data = await Promise.all(fetches);

  // return a sorted, flattened array of events
  return data
    .reduce(function(acc, cur) {
      return acc.concat(cur);
    }, [])
    .sort(sortByStartDate);
}

function fetchFromICal(url: string): Fetcher {
  return async function fetcher(source: string) {
    const result = await axios.get(url);

    const jcalData = ICAL.parse(result.data);
    const component = new ICAL.Component(jcalData);
    const vEvents = component.getAllSubcomponents("vevent");

    return vEvents.map(vEvent => {
      const event = new ICAL.Event(vEvent);

      // url format is https://www.meetup.com/AWS-Lafayette/events/[EVENTID]/
      // event ID format is event_[EVENTID]@meetup.com
      const matches = event.uid.match(/event_(.*?)@meetup\.com/i);
      const eventId = matches[1];

      return {
        id: eventId,
        name: event.summary,
        description: event.description,
        startDate: event.startDate.toJSDate(),
        endDate: event.endDate.toJSDate(),
        location: event.location,
        url: `https://www.meetup.com/AWS-Lafayette/events/${eventId}/`,
        source,
      } as Event;
    });
  };
}

/**
 * Fetch all events from a specific google calendar
 */
function fetchFromGoogleCalendar(calendarId: string, apiKey: string): Fetcher {
  return async function fetcher(source: string) {
    try {
      const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
      const result: { data: GoogleCalendarItems } = await axios.get(
        calendarUrl
      );
      return result.data.items
        .map(mapGoogleToEvent)
        .map(event => ({ ...event, source }));
    } catch (e) {
      console.error(e.response);
      return [];
    }
  };
}

function mapGoogleToEvent(event: GoogleCalendarItem): Event {
  return {
    id: event.id,
    name: event.summary,
    location: event.location,
    url: event.htmlLink,
    startDate: new Date(event.start.dateTime),
    endDate: new Date(event.end.dateTime),
    source: event.organizer.displayName,
  };
}

function sortByStartDate(a: Event, b: Event) {
  if (a.startDate > b.startDate) return -1;
  if (a.startDate < b.startDate) return 1;
  return 0;

  //return b.startDate - a.startDate;
}

const foo = [
  "vevent",
  [
    ["dtstamp", {}, "date-time", "2019-02-21T23:34:42Z"],
    ["dtstart", [Object], "date-time", "2019-02-21T18:00:00"],
    ["dtend", [Object], "date-time", "2019-02-21T20:00:00"],
    ["status", {}, "text", "CONFIRMED"],
    ["summary", {}, "text", "CI/CD Pipelines"],
    [
      "description",
      {},
      "text",
      "AWS Lafayette\nThursday, February 21 at 6:00 PM\n\nPresentation on CI/CD using AWS CodeSuite tools followed by an open discussion about this topic. Join us in learning about the latest in cloud technol...\n\nhttps://www.meetup.com/AWS-Lafayette/events/257276074/",
    ],
    ["class", {}, "text", "PUBLIC"],
    ["created", {}, "date-time", "2018-12-17T03:56:22Z"],
    ["geo", {}, "float", [Array]],
    [
      "location",
      {},
      "text",
      "214 Jefferson St (214 Jefferson St, Lafayette, LA 70501)",
    ],
    [
      "url",
      {},
      "uri",
      "https://www.meetup.com/AWS-Lafayette/events/257276074/",
    ],
    ["last-modified", {}, "date-time", "2019-02-21T11:52:42Z"],
    ["uid", {}, "text", "event_257276074@meetup.com"],
  ],
  [],
];
