"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

export function CalendarSection() {
  const [view, setView] = useState<"calendar" | "list">("calendar");

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
          <div className="mb-4 flex justify-end">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={view === "calendar" ? "default" : "outline"}
                onClick={() => setView("calendar")}
                className="rounded-r-none"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Calendar View
              </Button>
              <Button
                variant={view === "list" ? "default" : "outline"}
                onClick={() => setView("list")}
                className="rounded-l-none"
              >
                <ul className="mr-2 h-4 w-4" />
                List View
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="awareness">Health Awareness Days</TabsTrigger>
              <TabsTrigger value="outreach">Our Outreach Events</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {view === "calendar" ? (
                <GoogleCalendarEmbed calendarId="primary" />
              ) : (
                <EventsList
                  events={[...healthAwarenessDays, ...outreachEvents]}
                />
              )}
            </TabsContent>

            <TabsContent value="awareness" className="space-y-4">
              {view === "calendar" ? (
                <GoogleCalendarEmbed calendarId="health-awareness" />
              ) : (
                <EventsList events={healthAwarenessDays} />
              )}
            </TabsContent>

            <TabsContent value="outreach" className="space-y-4">
              {view === "calendar" ? (
                <GoogleCalendarEmbed calendarId="outreach-events" />
              ) : (
                <EventsList events={outreachEvents} />
              )}
            </TabsContent>
          </Tabs>

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
        src={`https://calendar.google.com/calendar/embed?src=${calendarId}%40group.calendar.google.com&ctz=local&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0`}
        style={{ border: 0 }}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        title="Health Awareness Calendar"
        className="h-full min-h-[500px] w-full"
      ></iframe>
    </div>
  );
}

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  type: "awareness" | "outreach";
  url?: string;
}

function EventsList({ events }: { events: Event[] }) {
  // Sort events by date
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <div className="space-y-4">
      {sortedEvents.map((event) => (
        <div
          key={event.id}
          className={`rounded-lg border p-4 ${event.type === "awareness" ? "bg-white" : "bg-pink-50"}`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold">{event.title}</h3>
              <div className="mt-1 flex items-center text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span className="text-sm">{event.date}</span>
                {event.time && (
                  <>
                    <Clock className="ml-3 mr-1 h-4 w-4" />
                    <span className="text-sm">{event.time}</span>
                  </>
                )}
              </div>
              {event.location && (
                <div className="mt-1 flex items-center text-gray-500">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              )}
              <p className="mt-2 text-gray-600">{event.description}</p>
            </div>
            {event.url && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="self-start md:self-center"
              >
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Sample data - in a real implementation, this would come from your Google Calendar API
const healthAwarenessDays: Event[] = [
  {
    id: "1",
    title: "World Health Day",
    date: "April 7, 2024",
    description: "Annual awareness day dedicated to global health issues.",
    type: "awareness",
    url: "https://www.who.int/campaigns/world-health-day",
  },
  {
    id: "2",
    title: "Menstrual Hygiene Day",
    date: "May 28, 2024",
    description:
      "A day to break taboos and raise awareness about the importance of menstrual hygiene management.",
    type: "awareness",
    url: "https://menstrualhygieneday.org/",
  },
  {
    id: "3",
    title: "World Contraception Day",
    date: "September 26, 2024",
    description:
      "Annual awareness day to improve awareness of contraception and enable young people to make informed choices on their sexual and reproductive health.",
    type: "awareness",
    url: "https://www.your-life.com/wcd/",
  },
  {
    id: "4",
    title: "International Day of the Girl Child",
    date: "October 11, 2024",
    description:
      "A day to recognize girls' rights and the unique challenges girls face around the world.",
    type: "awareness",
    url: "https://www.un.org/en/observances/girl-child-day",
  },
];

const outreachEvents: Event[] = [
  {
    id: "5",
    title: "Community Health Workshop",
    date: "June 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, Downtown",
    description:
      "Join us for a workshop on basic health education and hygiene practices.",
    type: "outreach",
  },
  {
    id: "6",
    title: "School Pad Bank Launch",
    date: "July 10, 2024",
    time: "9:00 AM - 11:00 AM",
    location: "Central High School",
    description:
      "Launching our new pad bank at Central High School with educational sessions.",
    type: "outreach",
  },
  {
    id: "7",
    title: "Mobile Health Clinic",
    date: "August 5, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "Rural Community Center",
    description:
      "Our mobile health clinic will provide basic health screenings and education.",
    type: "outreach",
  },
  {
    id: "8",
    title: "Health Literacy Campaign Kickoff",
    date: "September 1, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "City Hall Plaza",
    description:
      "Join us as we launch our new health literacy campaign with guest speakers and activities.",
    type: "outreach",
  },
];
