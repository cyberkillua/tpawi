"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react";

interface GoogleCalendarProps {
  calendarId?: string;
  maxResults?: number;
  apiKey?: string;
}

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  htmlLink: string;
}

// Helper functions extracted outside component to prevent recreation on renders
const formatEventDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatEventTime = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Sample data moved outside component
const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    summary: "World Health Day",
    description: "Annual awareness day dedicated to global health issues.",
    start: {
      date: "2024-04-07",
    },
    end: {
      date: "2024-04-07",
    },
    htmlLink: "https://calendar.google.com/event?action=TEMPLATE&tmeid=...",
  },
  {
    id: "2",
    summary: "Community Health Workshop",
    description:
      "Join us for a workshop on basic health education and hygiene practices.",
    location: "Community Center, Downtown",
    start: {
      dateTime: "2024-06-15T10:00:00-04:00",
    },
    end: {
      dateTime: "2024-06-15T14:00:00-04:00",
    },
    htmlLink: "https://calendar.google.com/event?action=TEMPLATE&tmeid=...",
  },
  {
    id: "3",
    summary: "Menstrual Hygiene Day",
    description:
      "A day to break taboos and raise awareness about the importance of menstrual hygiene management.",
    start: {
      date: "2024-05-28",
    },
    end: {
      date: "2024-05-28",
    },
    htmlLink: "https://calendar.google.com/event?action=TEMPLATE&tmeid=...",
  },
];

// Loading skeleton extracted to reusable component
const EventSkeleton = () => (
  <div className="rounded-lg border p-4">
    <Skeleton className="mb-2 h-6 w-3/4" />
    <Skeleton className="mb-1 h-4 w-1/2" />
    <Skeleton className="mb-2 h-4 w-1/3" />
    <Skeleton className="h-16 w-full" />
  </div>
);

const EventCard = ({ event }: { event: CalendarEvent }) => {
  const startDateTime = event.start.dateTime ?? event.start.date ?? "";

  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="text-lg font-bold">{event.summary}</h3>
      <div className="mt-1 flex items-center text-gray-500">
        <Calendar className="mr-1 h-4 w-4" />
        <span className="text-sm">{formatEventDate(startDateTime)}</span>
        {event.start.dateTime && (
          <>
            <Clock className="ml-3 mr-1 h-4 w-4" />
            <span className="text-sm">
              {formatEventTime(event.start.dateTime)} -{" "}
              {formatEventTime(event.end.dateTime ?? "")}
            </span>
          </>
        )}
      </div>
      {event.location && (
        <div className="mt-1 flex items-center text-gray-500">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="text-sm">{event.location}</span>
        </div>
      )}
      {event.description && (
        <p className="mt-2 text-gray-600">{event.description}</p>
      )}
      <div className="mt-3">
        <Button variant="outline" size="sm" asChild>
          <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">
            Add to My Calendar
          </a>
        </Button>
      </div>
    </div>
  );
};

export function GoogleCalendarEvents({
  calendarId = "1",
  maxResults = 10,
  apiKey = "",
}: GoogleCalendarProps) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API URL constructed with useMemo to prevent recreation on renders
  const apiUrl = useMemo(() => {
    const timeMin = new Date().toISOString();
    return `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&maxResults=${maxResults}&timeMin=${timeMin}&orderBy=startTime&singleEvents=true`;
  }, [calendarId, maxResults, apiKey]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      try {
        // In a real implementation, use the API URL from useMemo
        // const response = await fetch(apiUrl);
        // const data = await response.json();
        // if (!response.ok) throw new Error(data.error?.message || 'Failed to fetch events');
        // setEvents(data.items);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setEvents(sampleEvents);
      } catch (err) {
        setError("Failed to load calendar events. Please try again later.");
        console.error("Calendar fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    void fetchEvents();
  }, [apiUrl]); // Dependencies improved with apiUrl

  if (error) {
    return (
      <div className="rounded-lg border bg-red-50 p-6 text-center">
        <AlertCircle className="mx-auto mb-2 h-10 w-10 text-red-500" />
        <p className="text-red-600">{error}</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }, (_, i) => (
          <EventSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          No upcoming events found.
        </p>
      ) : (
        events.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </div>
  );
}
