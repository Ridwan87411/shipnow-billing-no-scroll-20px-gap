import { useMemo, useState } from "react";
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiMapPin,
  FiPlus,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const eventTemplates = [
  { offset: 0, title: "Review delivery schedule", time: "9:00 AM", type: "Meeting", location: "Operations Room", color: "purple" },
  { offset: 2, title: "Green Haven pickup", time: "10:30 AM", type: "Pickup", location: "Dhaka Hub", color: "blue" },
  { offset: 3, title: "Driver route briefing", time: "8:30 AM", type: "Meeting", location: "Dispatch Office", color: "purple" },
  { offset: 4, title: "Review delivery schedule", time: "1:30 PM", type: "Meeting", location: "Operations Room", color: "purple" },
  { offset: 5, title: "Fleet maintenance", time: "2:00 PM", type: "Maintenance", location: "Warehouse A", color: "orange" },
  { offset: 6, title: "Quick Parts pickup", time: "9:45 AM", type: "Pickup", location: "Uttara Hub", color: "blue" },
  { offset: 8, title: "Fresh Nest delivery", time: "11:15 AM", type: "Delivery", location: "Chattogram", color: "green" },
  { offset: 9, title: "Warehouse inventory check", time: "10:00 AM", type: "Inspection", location: "Warehouse A", color: "orange" },
  { offset: 10, title: "Review delivery schedule", time: "3:00 PM", type: "Meeting", location: "Conference Room", color: "purple" },
  { offset: 12, title: "Team planning", time: "3:30 PM", type: "Meeting", location: "Conference Room", color: "purple" },
  { offset: 13, title: "Moda Wear delivery", time: "12:15 PM", type: "Delivery", location: "Banani", color: "green" },
  { offset: 15, title: "Tech Gear pickup", time: "8:45 AM", type: "Pickup", location: "North Depot", color: "blue" },
  { offset: 16, title: "Carrier performance review", time: "11:30 AM", type: "Meeting", location: "Operations Room", color: "purple" },
  { offset: 18, title: "Safety inspection", time: "1:00 PM", type: "Inspection", location: "Warehouse B", color: "orange" },
  { offset: 19, title: "Vita Fresh pickup", time: "9:15 AM", type: "Pickup", location: "Central Hub", color: "blue" },
  { offset: 22, title: "Style Hub delivery", time: "4:15 PM", type: "Delivery", location: "Gulshan", color: "green" },
  { offset: 24, title: "Monthly logistics report", time: "2:30 PM", type: "Meeting", location: "Head Office", color: "purple" },
  { offset: 26, title: "Eco Lights delivery", time: "10:45 AM", type: "Delivery", location: "Dhanmondi", color: "green" },
  { offset: 28, title: "Vehicle compliance check", time: "1:45 PM", type: "Inspection", location: "Fleet Yard", color: "orange" },
];

const colorStyles = {
  purple: { dot: "bg-brand-600", badge: "bg-brand-50 text-brand-700", event: "border-brand-200 bg-brand-50 text-brand-800" },
  blue: { dot: "bg-[#4d8df7]", badge: "bg-[#edf5ff] text-[#3370cf]", event: "border-[#cfe2ff] bg-[#edf5ff] text-[#275fac]" },
  orange: { dot: "bg-[#ee9b45]", badge: "bg-[#fff5e9] text-[#b96a22]", event: "border-[#ffe0bd] bg-[#fff5e9] text-[#9e581c]" },
  green: { dot: "bg-success", badge: "bg-[#eaf9f1] text-[#248d5b]", event: "border-[#cceedd] bg-[#eaf9f1] text-[#207a50]" },
};

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function sameDay(first, second) {
  return dateKey(first) === dateKey(second);
}

function buildCalendarDays(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const gridStart = new Date(year, month, 1 - firstDay.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return date;
  });
}

export default function Calendar() {
  const today = useMemo(() => new Date(), []);
  const [visibleMonth, setVisibleMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState(today);

  const events = useMemo(() => eventTemplates.map((event) => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + event.offset);
    return { ...event, date, id: `${event.title}-${dateKey(date)}` };
  }), [today]);

  const days = useMemo(() => buildCalendarDays(visibleMonth), [visibleMonth]);
  const eventsByDate = useMemo(() => events.reduce((groups, event) => {
    const key = dateKey(event.date);
    groups[key] = [...(groups[key] || []), event];
    return groups;
  }, {}), [events]);

  const selectedEvents = eventsByDate[dateKey(selectedDate)] || [];
  const upcomingEvents = events
    .filter((event) => event.date >= new Date(today.getFullYear(), today.getMonth(), today.getDate()))
    .slice(0, 8);

  const changeMonth = (amount) => {
    const next = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + amount, 1);
    setVisibleMonth(next);
    setSelectedDate(next);
  };

  const goToToday = () => {
    setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today);
  };

  return (
    <div>
      <PageHeader title="Calendar" breadcrumb="Calendar" />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:hidden">
        <div>
          <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Calendar</h1>
          <p className="mt-1 text-[12px] text-muted">Plan shipments and team schedules</p>
        </div>
        <button className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 text-[13px] font-medium text-white sm:w-auto">
          <FiPlus /> Add Event
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <section className="card min-w-0 overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-line p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
            <div className="flex items-center justify-between gap-2 sm:justify-start">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-[#666] transition hover:bg-[#f7f7f8]"
                aria-label="Previous month"
              >
                <FiChevronLeft />
              </button>
              <h2 className="min-w-[160px] text-center text-[17px] font-semibold text-ink sm:text-[19px]">
                {MONTHS[visibleMonth.getMonth()]} {visibleMonth.getFullYear()}
              </h2>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-[#666] transition hover:bg-[#f7f7f8]"
                aria-label="Next month"
              >
                <FiChevronRight />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToToday}
                className="h-9 flex-1 rounded-lg border border-line px-4 text-[12px] font-medium text-[#555] transition hover:bg-[#f7f7f8] sm:flex-none"
              >
                Today
              </button>
              <button className="hidden h-9 items-center gap-2 rounded-lg bg-brand-600 px-4 text-[12px] font-medium text-white transition hover:bg-brand-700 md:flex">
                <FiPlus /> Add Event
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 border-b border-[#dfe7fb] bg-[#f1f5ff]">
            {WEEKDAYS.map((day) => (
              <div key={day} className="py-2.5 text-center text-[10px] font-semibold uppercase tracking-wide text-[#6680b5] sm:text-[11px]">
                <span className="sm:hidden">{day[0]}</span>
                <span className="hidden sm:inline">{day}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {days.map((date) => {
              const key = dateKey(date);
              const dayEvents = eventsByDate[key] || [];
              const isCurrentMonth = date.getMonth() === visibleMonth.getMonth();
              const isToday = sameDay(date, today);
              const isSelected = sameDay(date, selectedDate);

              return (
                <button
                  type="button"
                  key={key}
                  onClick={() => setSelectedDate(date)}
                  aria-label={`${date.toLocaleDateString()}${dayEvents.length ? `, ${dayEvents.length} events` : ""}`}
                  aria-pressed={isSelected}
                  className={`relative min-h-[58px] border-b border-r border-line p-1.5 text-left transition hover:bg-brand-50 sm:min-h-[88px] sm:p-2 lg:min-h-[112px] ${
                    isSelected ? "bg-brand-50/70 ring-1 ring-inset ring-brand-300" : "bg-white"
                  }`}
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[15px] font-semibold sm:h-9 sm:w-9 sm:text-[17px] lg:text-[18px] ${
                    isToday
                      ? "bg-brand-600 text-white"
                      : isCurrentMonth ? "text-[#444]" : "text-[#c1c1c5]"
                  }`}>
                    {date.getDate()}
                  </span>

                  <div className="mt-1 flex gap-1 sm:hidden">
                    {dayEvents.slice(0, 3).map((event) => (
                      <span key={event.id} className={`h-1.5 w-1.5 rounded-full ${colorStyles[event.color].dot}`} />
                    ))}
                  </div>

                  <div className="mt-1 hidden space-y-1 sm:block">
                    {dayEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className={`truncate rounded border px-1.5 py-1 text-[9px] font-medium lg:text-[10px] ${colorStyles[event.color].event}`}
                      >
                        <span className="hidden lg:inline">{event.time} · </span>{event.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <p className="px-1 text-[9px] text-muted">+{dayEvents.length - 2} more</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <aside className="flex h-full flex-col gap-4">
          <section className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted">Selected date</p>
                <h3 className="mt-1 text-[16px] font-semibold text-ink">
                  {selectedDate.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
                </h3>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <FiCalendar />
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {selectedEvents.length ? selectedEvents.map((event) => (
                <article key={event.id} className="rounded-xl border border-line p-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-[13px] font-semibold text-ink">{event.title}</h4>
                    <span className={`rounded-full px-2 py-1 text-[9px] font-medium ${colorStyles[event.color].badge}`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted"><FiClock /> {event.time}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted"><FiMapPin /> {event.location}</p>
                </article>
              )) : (
                <div className="rounded-xl border border-dashed border-[#dcdce2] px-4 py-7 text-center">
                  <p className="text-[12px] font-medium text-[#666]">No events scheduled</p>
                  <p className="mt-1 text-[10px] text-muted">This day is currently open.</p>
                </div>
              )}
            </div>
          </section>

          <section className="card overflow-hidden xl:mt-auto">
            <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
              <div>
                <h3 className="text-[15px] font-semibold text-ink">Upcoming events</h3>
                <p className="mt-0.5 text-[10px] text-muted">{upcomingEvents.length} events scheduled</p>
              </div>
              <FiCalendar className="text-brand-600" />
            </div>

            <div className="grid grid-cols-[46px_minmax(0,1fr)_auto] gap-2 bg-[#fafafa] px-4 py-2 text-[9px] font-semibold uppercase tracking-wide text-muted">
              <span>Date</span>
              <span>Event</span>
              <span>Type</span>
            </div>

            <div className="max-h-[430px] divide-y divide-line overflow-y-auto px-2 scrollbar-thin">
              {upcomingEvents.map((event) => (
                <button
                  type="button"
                  key={event.id}
                  onClick={() => {
                    setSelectedDate(event.date);
                    setVisibleMonth(new Date(event.date.getFullYear(), event.date.getMonth(), 1));
                  }}
                  className="grid w-full grid-cols-[46px_minmax(0,1fr)_auto] items-center gap-2 rounded-lg px-2 py-3 text-left transition hover:bg-[#f8f7ff]"
                >
                  <div className="flex h-11 w-11 flex-col items-center justify-center rounded-lg bg-[#f6f6f7]">
                    <span className="text-[9px] font-medium uppercase text-muted">{MONTHS[event.date.getMonth()].slice(0, 3)}</span>
                    <span className="text-[15px] font-semibold text-ink">{event.date.getDate()}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-[#444]">{event.title}</p>
                    <p className="mt-1 flex items-center gap-1 text-[9px] text-muted">
                      <FiClock /> {event.time}
                    </p>
                  </div>
                  <span className={`max-w-[72px] truncate rounded-full px-2 py-1 text-[8px] font-medium ${colorStyles[event.color].badge}`}>
                    {event.type}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
