export interface GoogleCalendarItem {
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

export interface GoogleCalendarItems {
  items: GoogleCalendarItem[];
}
