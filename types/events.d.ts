interface ASGEvent {
  id: string;
  name: string;
  location: string;
  url?: string;
  startDate: Date;
  endDate: Date;
  source: string;
  description?: string;
}

interface GoogleCalendarItem {
  kind: "calendar#event";
  id: string;
  status: string;
  htmlLink: string;
  updated: string;
  summary: string;
  location: string;
  creator: { email: string; displayName: string };
  organizer: {
    email: string;
    displayName: string;
    self: boolean;
  };
  start: { dateTime: string };
  end: { dateTime: string };
  transparency: string;
  iCalUID: string;
  sequence: number;
  extendedProperties: { private: { everyoneDeclinedDismissed: string } };
  guestsCanSeeOtherGuests: boolean;
}

interface GoogleCalendarItems {
  items: GoogleCalendarItem[];
}

type EventFetcher = (name: string) => Promise<ASGEvent[]>;

interface ASGEventSource {
  name: string;
  fetcher: EventFetcher;
}

interface MeetupEvent {
  id: string;
  name: string;
  time: string;
  duration: number;
  local_date: string;
  local_time: string;
  utc_offset: number;
  yes_rsvp_count: number;
  venue: {
    id: number;
    name: string;
    lat: number;
    long: number;
    address_1: string;
    address_2: string;
    city: string;
    country: string;
    zip: string;
    state: string;
  };
  group: {
    id: number;
    name: string;
  };
  link: string;
  description: string;
}

type SortDirection = "ASC" | "DESC";
