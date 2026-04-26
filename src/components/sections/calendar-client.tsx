"use client";

import { useMemo, useState } from "react";
import type { SerializedEvent } from "./calendar-section";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function CalendarClient({ events }: { events: SerializedEvent[] }) {
  // Build event-day lookup: "YYYY-M" (0-indexed) → day numbers
  const eventDays = useMemo(() => {
    const map: Record<string, Set<number>> = {};
    for (const e of events) {
      const d = new Date(e.startISO);
      const k = `${d.getFullYear()}-${d.getMonth()}`;
      (map[k] ??= new Set()).add(d.getDate());
    }
    return Object.fromEntries(
      Object.entries(map).map(([k, v]) => [k, Array.from(v)]),
    );
  }, [events]);

  // Default mini-cal to the month of the first upcoming event, else current month.
  const initialMonth = useMemo(() => {
    if (events[0]) {
      const d = new Date(events[0].startISO);
      return new Date(d.getFullYear(), d.getMonth(), 1);
    }
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }, [events]);

  return (
    <section id="events" className="section-pad bg-paper-2">
      <div className="wrap">
        <div className="mb-[60px] grid items-end gap-[60px] min-[880px]:grid-cols-2">
          <div>
            <span className="eyebrow">Public health calendar</span>
            <h2 className="mt-4">
              Awareness days &amp;
              <br />
              upcoming outreaches.
            </h2>
          </div>
          <p className="max-w-[48ch] text-ink-soft">
            The dates we observe and the work we&apos;re scheduling around
            them. Subscribe to follow along, or join us on the ground.
          </p>
        </div>

        <div className="grid items-start gap-[clamp(32px,5vw,64px)] min-[1000px]:grid-cols-[1.05fr_0.95fr]">
          <div>
            {events.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="flex flex-col border-t border-line">
                {events.map((e) => (
                  <EventRow key={e.id} e={e} />
                ))}
              </div>
            )}
          </div>

          <MiniCal initialMonth={initialMonth} eventDays={eventDays} />
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[6px] border border-dashed border-line bg-paper p-10 text-center">
      <div className="serif text-[1.4rem]">No upcoming events scheduled.</div>
      <p className="mt-2 text-ink-soft">
        Subscribe to our calendar to be notified when new outreaches and
        awareness drives go live.
      </p>
    </div>
  );
}

function EventRow({ e }: { e: SerializedEvent }) {
  return (
    <div className="grid cursor-pointer grid-cols-[96px_1fr_auto] items-center gap-6 border-b border-line py-[22px] transition-all duration-200 hover:bg-pink-100/50 hover:pl-3.5">
      <div className="border-r border-line pr-4 text-center">
        <div className="mono text-[0.65rem] uppercase tracking-[0.18em] text-pink-700">
          {e.m}
        </div>
        <div className="serif mt-1 text-[2rem] leading-none">{e.d}</div>
      </div>
      <div>
        <div className="serif text-[1.25rem] leading-[1.2]">{e.title}</div>
        <div className="mono mt-1.5 flex flex-wrap gap-3.5 text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute">
          {e.meta.map((m, j) => (
            <span key={j}>{m}</span>
          ))}
        </div>
      </div>
      <EventTag tag={e.tag} label={e.tagLabel} />
    </div>
  );
}

function EventTag({
  tag,
  label,
}: {
  tag: SerializedEvent["tag"];
  label: string;
}) {
  const cls =
    tag === "pink"
      ? "bg-pink-100 border-pink-200 text-pink-700"
      : tag === "dark"
        ? "bg-ink border-ink text-paper"
        : "bg-paper border-line text-ink-soft";
  return (
    <span
      className={`mono rounded-full border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.16em] ${cls}`}
    >
      {label}
    </span>
  );
}

function MiniCal({
  initialMonth,
  eventDays,
}: {
  initialMonth: Date;
  eventDays: Record<string, number[]>;
}) {
  const today = new Date();
  const [cur, setCur] = useState(initialMonth);

  const year = cur.getFullYear();
  const month = cur.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const lead = (first.getDay() + 6) % 7;

  const prevLast = new Date(year, month, 0).getDate();
  const cells: { d: number; muted: boolean }[] = [];
  for (let i = lead - 1; i >= 0; i--) {
    cells.push({ d: prevLast - i, muted: true });
  }
  for (let d = 1; d <= last.getDate(); d++) {
    cells.push({ d, muted: false });
  }
  let trail = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ d: trail++, muted: true });
  }

  const evs = eventDays[`${year}-${month}`] ?? [];
  const isThisMonth =
    today.getFullYear() === year && today.getMonth() === month;

  return (
    <aside className="sticky top-24 rounded-[6px] border border-line bg-paper p-7">
      <div className="flex items-start justify-between">
        <div>
          <span className="eyebrow">This month</span>
          <h3 className="mt-2.5 text-[1.4rem]">Plan with us</h3>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-3.5 flex items-center justify-between">
          <span className="serif text-[1.2rem]">
            {MONTHS[month]} {year}
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => setCur(new Date(year, month - 1, 1))}
              className="grid h-7 w-7 place-items-center rounded-full border border-line bg-transparent text-ink-soft hover:border-pink-200 hover:bg-pink-100"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setCur(new Date(year, month + 1, 1))}
              className="grid h-7 w-7 place-items-center rounded-full border border-line bg-transparent text-ink-soft hover:border-pink-200 hover:bg-pink-100"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div
              key={i}
              className="mono py-1.5 text-center text-[0.6rem] uppercase tracking-[0.14em] text-ink-mute"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {cells.map((c, i) => {
            const isToday =
              !c.muted && isThisMonth && c.d === today.getDate();
            const hasEvent = !c.muted && evs.includes(c.d);
            return (
              <div
                key={i}
                className={`relative grid aspect-square cursor-pointer place-items-center rounded-full text-[0.84rem] ${
                  c.muted
                    ? "text-ink-mute opacity-40"
                    : isToday
                      ? "bg-ink text-paper"
                      : "text-ink-soft hover:bg-pink-100"
                }`}
              >
                {c.d}
                {hasEvent && (
                  <span
                    className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${
                      isToday ? "bg-pink-300" : "bg-pink-500"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[22px] flex flex-col gap-2.5 border-t border-line pt-[22px] text-[0.85rem] text-ink-soft">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
          Outreach &amp; field events
        </div>
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink" />
          Awareness days
        </div>
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-mute" />
          Workshops &amp; sessions
        </div>
      </div>
    </aside>
  );
}
