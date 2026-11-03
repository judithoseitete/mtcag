// Weekly schedule data
export const weeklySchedule = [
  {
    day: "Sunday",
    dayIndex: 0,
    events: [
      { time: "8:00 AM - 10:30 AM", event: "Sunday Service" },
      { time: "11:00 AM - 12:00 PM", event: "Men Ministry Meeting" },
    ],
  },
  {
    day: "Monday",
    dayIndex: 1,
    events: [
      { time: "6:45 PM - 8:00 PM", event: "Women Ministry Meeting" },
      { time: "6:45 PM - 8:00 PM", event: "Youth Ministry Meeting" },
    ],
  },
  {
    day: "Tuesday",
    dayIndex: 2,
    events: [],
  },
  {
    day: "Wednesday",
    dayIndex: 3,
    events: [{ time: "7:00 PM - 8:00 PM", event: "Bible Study" }],
  },
  {
    day: "Thursday",
    dayIndex: 4,
    events: [{ time: "10:30 AM - 12:00 PM", event: "Miracle Hour" }],
  },
  {
    day: "Friday",
    dayIndex: 5,
    events: [{ time: "7:00 PM - 8:00 PM", event: "Congregational Prayer" }],
  },
  {
    day: "Saturday",
    dayIndex: 6,
    events: [],
  },
];

// Get upcoming events from today to Sunday
export function getUpcomingEvents() {
  const today = new Date();
  const currentDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  const upcomingEvents: Array<{
    id: number;
    title: string;
    description: string;
    datetime: string;
  }> = [];
  
  let eventId = 1;
  
  // If today is Sunday (0), show all Sunday events
  // Otherwise, show events from today through Sunday
  for (let i = currentDayIndex; i <= 6; i++) {
    const daySchedule = weeklySchedule.find(d => d.dayIndex === i);
    if (daySchedule && daySchedule.events.length > 0) {
      daySchedule.events.forEach(evt => {
        upcomingEvents.push({
          id: eventId++,
          title: evt.event,
          description: `Join us for ${evt.event.toLowerCase()} this week`,
          datetime: `${daySchedule.day}, ${evt.time}`,
        });
      });
    }
  }
  
  // If we're on Sunday and have events, show them
  // Otherwise if no events found, show next week's Sunday
  if (upcomingEvents.length === 0) {
    const sundaySchedule = weeklySchedule[0];
    sundaySchedule.events.forEach(evt => {
      upcomingEvents.push({
        id: eventId++,
        title: evt.event,
        description: `Join us for ${evt.event.toLowerCase()} this week`,
        datetime: `Next ${sundaySchedule.day}, ${evt.time}`,
      });
    });
  }
  
  return upcomingEvents;
}