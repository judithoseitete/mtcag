export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category?: string;
  imageUrl?: string;
  featured?: boolean;
}

export const events: Event[] = [
  {
    id: 1,
    title: "25th Anniversary Celebration",
    date: "November 15, 2026",
    time: "10:00 AM",
    location: "MTC Main Auditorium",
    description:
      "Join us as we celebrate 25 years of God's faithfulness and ministry in Sowutuom. Special guests, worship, and thanksgiving service.",
    category: "Special Event",
    featured: true,
  },
  {
    id: 2,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM",
    location: "MTC Main Auditorium",
    description:
      "Join us for powerful worship, inspiring messages, and fellowship as we gather to honor God.",
    category: "Weekly Service",
  },
  {
    id: 3,
    title: "Midweek Bible Study",
    date: "Every Wednesday",
    time: "6:00 PM",
    location: "MTC Main Auditorium",
    description:
      "Dive deeper into God's Word with our midweek Bible study. All are welcome to grow in faith together.",
    category: "Weekly Service",
  },
  {
    id: 4,
    title: "Youth Night",
    date: "First Friday of Every Month",
    time: "7:00 PM",
    location: "MTC Youth Center",
    description:
      "An exciting evening of worship, games, and relevant teachings for our young people.",
    category: "Youth",
  },
  {
    id: 5,
    title: "Prayer and Fasting",
    date: "First Week of December",
    time: "Various Times",
    location: "Church Premises",
    description:
      "Join us for a week of corporate prayer and fasting as we seek God's face for the coming year.",
    category: "Prayer",
  },
  {
    id: 6,
    title: "Women's Conference 2026",
    date: "March 8-10, 2027",
    time: "9:00 AM - 4:00 PM",
    location: "MTC Main Auditorium",
    description:
      "A transformative weekend for women with powerful teachings, worship, and fellowship.",
    category: "Conference",
  },
];
