import { Executives } from "@/types";

export interface SubDepartment {
  id: string;
  name: string;
  meetingTime?: string;
  location?: string;
  executives?: Executives;
}

export interface Department {
  id: string;
  name: string;
  executives: Executives;
  subDepartments: SubDepartment[];
}

export const departments: Department[] = [
  {
    id: "men",
    name: "Men's Ministry",
    executives: {
      president: "Mr. Isaac Kobbie",
      vicePresident: "Name",
      treasurer: "Name",
      organizer: "Name",
      secretary: "Name",
    },
    subDepartments: [
      {
        id: "pathfinders",
        name: "Pathfinders",
        meetingTime: "Every Saturday, 3:00 PM",
        location: "Church Premises",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
      {
        id: "royal-rangers",
        name: "Royal Rangers",
        meetingTime: "Every Friday, 5:00 PM",
        location: "Church Grounds",
      },
    ],
  },
  {
    id: "women",
    name: "Women's Ministry",
    executives: {
      president: "Mrs. Enid Osei-Tete",
      vicePresident: "Name",
      treasurer: "Name",
      organizer: "Name",
      secretary: "Name",
    },
    subDepartments: [
      {
        id: "joy",
        name: "JOY",
        meetingTime: "Every Wednesday, 5:00 PM",
        location: "Church Hall",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
      {
        id: "young-singles",
        name: "Young Singles",
        meetingTime: "Every Sunday, 2:00 PM",
        location: "Youth Center",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
      {
        id: "missionette",
        name: "Missionette",
        meetingTime: "Every Saturday, 2:00 PM",
        location: "Church Premises",
      },
    ],
  },
  {
    id: "youth",
    name: "Youth Ministry",
    executives: {
      president: "Burke Eduah",
      vicePresident: "Name",
      treasurer: "Name",
      organizer: "Name",
      secretary: "Name",
    },
    subDepartments: [],
  },
  {
    id: "sunday-school",
    name: "Sunday School",
    executives: {
      president: "Pastor Benjamin Larbie Asamoah",
      vicePresident: "Name",
      treasurer: "Name",
      organizer: "Name",
      secretary: "Name",
    },
    subDepartments: [],
  },
  {
    id: "children",
    name: "Children's Ministry",
    executives: {
      president: "Name",
      vicePresident: "Name",
      treasurer: "Name",
      organizer: "Name",
      secretary: "Name",
    },
    subDepartments: [],
  },
  {
    id: "missions",
    name: "Missions & Music Department",
    executives: {
      president: "Name",
      vicePresident: "Name",
      treasurer: "Name",
      organizer: "Name",
      secretary: "Name",
    },
    subDepartments: [
      {
        id: "prayer-warriors",
        name: "Prayer Warriors",
        meetingTime: "Every Tuesday, 6:00 AM",
        location: "Prayer Room",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
      {
        id: "anointed-voices",
        name: "Anointed Voices",
        meetingTime: "Every Thursday, 6:00 PM",
        location: "Church Auditorium",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
      {
        id: "zion-praise",
        name: "Zion Praise",
        meetingTime: "Every Wednesday, 7:00 PM",
        location: "Church Auditorium",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
      {
        id: "conquerors-melodies",
        name: "Conquerors Melodies",
        meetingTime: "Every Saturday, 4:00 PM",
        location: "Church Auditorium",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
      {
        id: "church-choir",
        name: "Church Choir",
        meetingTime: "Every Saturday, 5:00 PM",
        location: "Church Auditorium",
        executives: {
          president: "Name",
          vicePresident: "Name",
          treasurer: "Name",
          organizer: "Name",
          secretary: "Name",
        },
      },
    ],
  },
];
