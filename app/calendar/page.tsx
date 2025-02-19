"use client";
import {
  formatDate,
  DatesSetArg,
  EventClickArg,
  EventApi,
  DateSelectArg,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
// import dialog
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogOverlay,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addEvent,
  removeEvent,
  updateEvent,
} from "../store/events/eventsSlice";

const CalendarPage = () => {
  const events = useAppSelector((state) => state.events.events);
  const [currentEvent, setCurrentEvent] = useState<EventApi[] | null>(null);
  const [newEventTtitle, setNewEventTitle] = useState<string>("");
  const [eventColor, setEventColor] = useState<string>("#3182ce");
  const [selecetdDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEventTtitle && selecetdDate) {
      const calendarApi = selecetdDate.view.calendar;
      calendarApi.unselect();
      const newEvent = {
        id: Math.random().toString(36).substr(2, 9),
        title: newEventTtitle,
        start: selecetdDate.startStr,
        end: selecetdDate.endStr,
        allDay: selecetdDate.allDay,
        backgroundColor: eventColor,
        borderColor: eventColor,
        eventColor: eventColor,
      };
      calendarApi.addEvent(newEvent);
      dispatch(addEvent(newEvent));
    }
    setIsDialogOpen(false);
    setNewEventTitle("");
  };
  const handleEventDrop = (eventDropInfo: any) => {
    console.log({ eventDropInfo });
    const { event } = eventDropInfo;
    const updatedEvent = {
      id: event.id,
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay,
      backgroundColor: event.backgroundColor,
      borderColor: event.borderColor,
      eventColor: event.eventColor,
    };
    dispatch(updateEvent(updatedEvent));
  };
  const handleEventClick = (selected: EventClickArg) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      selected.event.remove();
      dispatch(removeEvent(selected.event.id));
    }
  };
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        slotDuration="00:30:00" // Set time intervals (30 minutes)
        nowIndicator={true}
        initialEvents={events}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={(events) => setCurrentEvent(events)}
        eventDrop={handleEventDrop}
        eventChange={handleEventDrop}
        height={"85vh"}
      />

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => setIsDialogOpen(open)}
      >
        <DialogTrigger asChild>
          <button className="hidden">Open Dialog</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle asChild>
              <h1>Add Event</h1>
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddEvent}>
            <div className="flex flex-col gap-4">
              <label htmlFor="title">Event Title</label>
              <input
                type="text"
                id="title"
                value={newEventTtitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
              />
              {/* event color */}
              <label htmlFor="color">Event Color</label>
              <input
                type="color"
                id="color"
                value={eventColor}
                onChange={(e) => setEventColor(e.target.value)}
              />
              <button type="submit">Add Event</button>
            </div>
          </form>
          <DialogClose asChild>
            <button>Close</button>
          </DialogClose>
        </DialogContent>
        <DialogOverlay />
      </Dialog>
    </>
  );
};

export default CalendarPage;
