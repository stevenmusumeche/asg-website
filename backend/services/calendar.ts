import axios from "axios";

export async function listEvents() {
  const asgCalendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${
    process.env.GOOGLE_CALENDAR_ID
  }/events?key=${process.env.GOOGLE_CALENDAR_API_KEY}`;

  const result = await axios.get(asgCalendarUrl);
  // todo: transform google response into a more ergonomic API response
  return result.data.items;
}
