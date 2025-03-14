"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

export function CalendarSection() {
  return (
    <section id="events" className="w-full bg-pink-50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Health Awareness Calendar
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl lg:text-lg xl:text-xl">
              Stay informed about important health awareness dates and our
              upcoming outreach events.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <GoogleCalendarEmbed calendarId="pinkwhiteinitiative@gmail.com" />

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-gray-500">
              Want to add our calendar to your own Google Calendar?
            </p>
            <Button variant="outline" className="inline-flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Add to My Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface GoogleCalendarEmbedProps {
  calendarId: string;
}

function GoogleCalendarEmbed({ calendarId }: GoogleCalendarEmbedProps) {
  // In a real implementation, you would use your actual Google Calendar ID
  // The calendarId prop would determine which calendar to show (all, awareness days, or outreach events)

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border bg-white shadow-sm">
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=local&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0`}
        style={{ border: 0 }}
        width="100%"
        height="100%"
        title="Health Awareness Calendar"
        className="h-full min-h-[500px] w-full"
      ></iframe>
    </div>
  );
}
