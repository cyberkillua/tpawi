import {
  fetchCalendarEvents,
  type CalEvent,
  formatEventTime,
  formatEventDateParts,
} from "@/lib/calendar";
import { CalendarClient } from "./calendar-client";

export async function CalendarSection() {
  const events = await fetchCalendarEvents();

  // Serialize for client (Date → ISO)
  const serialized = events.map((e) => ({
    id: e.id,
    startISO: e.start.toISOString(),
    endISO: e.end?.toISOString() ?? null,
    allDay: e.allDay,
    title: e.title,
    location: e.location,
    tag: e.tag,
    tagLabel: e.tagLabel,
    m: formatEventDateParts(e).m,
    d: formatEventDateParts(e).d,
    meta: formatEventTime(e),
  }));

  return <CalendarClient events={serialized} />;
}

export type SerializedEvent = {
  id: string;
  startISO: string;
  endISO: string | null;
  allDay: boolean;
  title: string;
  location: string | null;
  tag: CalEvent["tag"];
  tagLabel: string;
  m: string;
  d: string;
  meta: string[];
};
