import axios from "axios";
import * as h2p from "html2plaintext";

/**
 * Places where we get events from
 */
const eventSources: EventSource[] = [
  {
    name: "Acadiana Software Group Calendar",
    fetcher: fetchFromGoogleCalendar(
      process.env.GOOGLE_CALENDAR_ID as string,
      process.env.GOOGLE_CALENDAR_API_KEY as string
    ),
  },
  {
    name: "AWS Lafayette",
    fetcher: fetchFromMeetup("AWS-Lafayette"),
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

function fetchFromMeetup(meetupUrlName: string) {
  return async function fetcher(source: string) {
    const url = `https://api.meetup.com/${meetupUrlName}/events?photo-host=public&page=200&key=${
      process.env.MEETUP_API_KEY
    }`;
    const { data }: { data: MeetupEvent[] } = await axios.get(url);

    return data.map(mapMeetupToEvent).map(event => ({ ...event, source }));
  };
}

function mapMeetupToEvent(event: MeetupEvent): Event {
  return {
    id: event.id,
    name: event.name,
    location: `${event.venue.address_1}${event.venue.address_2 &&
      " " + event.venue.address_2}, ${event.venue.city}, ${event.venue.state} ${
      event.venue.zip
    }`,
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
  if (a.startDate > b.startDate) return 1;
  if (a.startDate < b.startDate) return -1;
  return 0;
}
