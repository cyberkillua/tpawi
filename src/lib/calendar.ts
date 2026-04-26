export type CalEvent = {
  id: string;
  start: Date;
  end: Date | null;
  allDay: boolean;
  title: string;
  location: string | null;
  description: string | null;
  tag: "pink" | "dark" | "neutral";
  tagLabel: string;
};

const ICS_URL =
  "https://calendar.google.com/calendar/ical/pinkwhiteinitiative%40gmail.com/public/basic.ics";

export async function fetchCalendarEvents(): Promise<CalEvent[]> {
  try {
    const res = await fetch(ICS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const text = await res.text();
    return parseIcs(text);
  } catch {
    return [];
  }
}

function parseIcs(ics: string): CalEvent[] {
  // Unfold lines: per RFC 5545, continuation lines start with space/tab.
  const unfolded = ics.replace(/\r?\n[ \t]/g, "");
  const lines = unfolded.split(/\r?\n/);

  const events: CalEvent[] = [];
  let cur: Partial<Record<string, string>> & { _allDay?: boolean } = {};
  let inEvent = false;

  for (const raw of lines) {
    if (raw === "BEGIN:VEVENT") {
      inEvent = true;
      cur = {};
      continue;
    }
    if (raw === "END:VEVENT") {
      inEvent = false;
      const ev = finalize(cur);
      if (ev) events.push(ev);
      continue;
    }
    if (!inEvent) continue;

    const colon = raw.indexOf(":");
    if (colon < 0) continue;
    const left = raw.slice(0, colon);
    const value = raw.slice(colon + 1);
    const [key] = left.split(";");
    const params = left.includes(";") ? left.slice(left.indexOf(";") + 1) : "";

    switch (key) {
      case "UID":
        cur.uid = value;
        break;
      case "SUMMARY":
        cur.summary = decodeIcsText(value);
        break;
      case "LOCATION":
        cur.location = decodeIcsText(value);
        break;
      case "DESCRIPTION":
        cur.description = decodeIcsText(value);
        break;
      case "DTSTART":
        cur.dtstart = value;
        cur._allDay ||= /VALUE=DATE(?!-TIME)/.test(params);
        break;
      case "DTEND":
        cur.dtend = value;
        break;
    }
  }

  // Sort ascending by start, drop past-by-more-than-1-day
  const cutoff = new Date();
  cutoff.setHours(0, 0, 0, 0);
  return events
    .filter((e) => e.start >= cutoff)
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}

function finalize(
  c: Partial<Record<string, string>> & { _allDay?: boolean },
): CalEvent | null {
  if (!c.dtstart || !c.summary) return null;
  const start = parseIcsDate(c.dtstart);
  if (!start) return null;
  const end = c.dtend ? parseIcsDate(c.dtend) : null;
  const allDay = !!c._allDay || /^\d{8}$/.test(c.dtstart);
  const { tag, tagLabel } = classify(c.summary);
  return {
    id: c.uid ?? `${c.dtstart}-${c.summary}`,
    start,
    end,
    allDay,
    title: c.summary,
    location: c.location ?? null,
    description: c.description ?? null,
    tag,
    tagLabel,
  };
}

function parseIcsDate(s: string): Date | null {
  // YYYYMMDD
  const dateOnly = /^(\d{4})(\d{2})(\d{2})$/.exec(s);
  if (dateOnly) {
    return new Date(
      Number(dateOnly[1]),
      Number(dateOnly[2]) - 1,
      Number(dateOnly[3]),
    );
  }
  // YYYYMMDDTHHMMSS or ...Z
  const dt = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/.exec(s);
  if (dt) {
    const [, y, mo, d, h, mi, se, z] = dt;
    if (z === "Z") {
      return new Date(
        Date.UTC(
          Number(y),
          Number(mo) - 1,
          Number(d),
          Number(h),
          Number(mi),
          Number(se),
        ),
      );
    }
    return new Date(
      Number(y),
      Number(mo) - 1,
      Number(d),
      Number(h),
      Number(mi),
      Number(se),
    );
  }
  return null;
}

function decodeIcsText(s: string): string {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\");
}

function classify(title: string): {
  tag: CalEvent["tag"];
  tagLabel: string;
} {
  const t = title.toLowerCase();
  if (/(outreach|distribution|drive|mobile clinic|pad bank|launch)/.test(t)) {
    if (/launch/.test(t)) return { tag: "pink", tagLabel: "Launch" };
    return { tag: "pink", tagLabel: "Outreach" };
  }
  if (/(awareness|world|day|panel|advocacy|campaign)/.test(t)) {
    return { tag: "dark", tagLabel: "Awareness" };
  }
  return { tag: "neutral", tagLabel: "Workshop" };
}

const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatEventTime(e: CalEvent): string[] {
  const meta: string[] = [];
  if (e.allDay) {
    meta.push("All day");
  } else {
    const fmt = (d: Date) =>
      d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    meta.push(e.end ? `${fmt(e.start)} — ${fmt(e.end)}` : fmt(e.start));
  }
  if (e.location) meta.push(e.location);
  return meta;
}

export function formatEventDateParts(e: CalEvent): { m: string; d: string } {
  return {
    m: MONTH_ABBR[e.start.getMonth()]!,
    d: String(e.start.getDate()).padStart(2, "0"),
  };
}
