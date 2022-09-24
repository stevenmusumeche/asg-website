import axios from "axios";
import * as h2p from "html2plaintext";
import { isAfter, subMinutes } from "date-fns";

interface Cache {
  createdAt?: Date;
  data: ASGEvent[];
}

// simple in-memory cache
const cache: Cache = {
  data: [],
};

/**
 * Places where we get events from
 */
const eventSources: ASGEventSource[] = [
  {
    name: "Acadiana Software Group Calendar",
    fetcher: fetchFromGoogleCalendar(
      process.env.GOOGLE_CALENDAR_ID as string,
      process.env.GOOGLE_CALENDAR_API_KEY as string
    ),
  },
  {
    name: "Acadiana Data Analytics",
    fetcher: fetchFromGoogleCalendar("acadianadata@gmail.com", process.env
      .GOOGLE_CALENDAR_API_KEY as string),
  },
  {
    name: "AWS Lafayette",
    fetcher: fetchFromGoogleCalendar("meetup@infascination.com", process.env
      .GOOGLE_CALENDAR_API_KEY as string),
  },
];

/**
 * Get all events from all sources
 */
export async function listEvents(): Promise<ASGEvent[]> {
  // check cache and return data from it if it's fresh
  const fiveMinsAgo = subMinutes(new Date(), 5);
  if (cache.createdAt && isAfter(cache.createdAt, fiveMinsAgo)) {
    console.log("Upcoming events cache hit");
    return cache.data;
  }

  console.log("Upcoming events cache miss");

  // build an array of promises from all event sources
  const fetches = eventSources.map(source => {
    return source.fetcher(source.name);
  });

  // fetch data in parallel
  const data = await Promise.all(fetches);

  // return a sorted, flattened array of events
  const events = data
    .reduce(function(acc, cur) {
      return acc.concat(cur);
    }, [])
    .sort(sortByStartDate);

  // cache it
  cache.createdAt = new Date();
  cache.data = events;

  return events;
}

function fetchFromMeetup(meetupUrlName: string) {
  return async function fetcher(source: string) {
    const url = `https://api.meetup.com/${meetupUrlName}/events?photo-host=public&page=200&key=${
      process.env.MEETUP_API_KEY
    }`;
    const { data }: { data: MeetupEvent[] } = await axios.get(url);

    return data.map(mapMeetupToEvent).map(event => ({ ...event, source }));
  };
}

function mapMeetupToEvent(event: MeetupEvent): ASGEvent {
  return {
    id: event.id,
    name: event.name,
    location: `${event.venue.address_1}${(event.venue.address_2 &&
      " " + event.venue.address_2) ||
      ""}, ${event.venue.city}, ${event.venue.state} ${event.venue.zip}`,
    url: event.link,
    startDate: new Date(event.time),
    endDate: new Date(event.time + event.duration),
    source: event.group.name,
    description: h2p(event.description),
  };
}

/**
 * Fetch all events from a specific google calendar
 */
function fetchFromGoogleCalendar(
  calendarId: string,
  apiKey: string
): EventFetcher {
  return async function fetcher(source: string) {
    try {
      const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
      const result: { data: GoogleCalendarItems } = await axios.get(
        calendarUrl
      );
      return result.data.items
        .map(mapGoogleToEvent)
        .map(event => ({ ...event, source }));
    } catch (e: any) {
      console.error(e.response);
      return [];
    }
  };
}

function mapGoogleToEvent(event: GoogleCalendarItem): ASGEvent {
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

function sortByStartDate(a: ASGEvent, b: ASGEvent) {
  if (a.startDate > b.startDate) return 1;
  if (a.startDate < b.startDate) return -1;
  return 0;
}
