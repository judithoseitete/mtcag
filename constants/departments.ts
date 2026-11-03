import { Executives } from "@/types";

export interface SubDepartment {
  id: string;
  name: string;
  motto?: string;
  slogan?: string;
  meetingTime?: string;
  location?: string;
  description?: string;
  executives?: Executives;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  motto?: string;
  executives: Executives;
  subDepartments: SubDepartment[];
}

export const departments: Department[] = [
  {
    id: "men",
    name: "Men's Department",
    description:
      "Empowering men to be godly leaders in their homes, church, and community.",
    motto: "Strong in Faith, Bold in Action",
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
        motto: "Blazing trails for Christ",
        slogan: "Men of Purpose, Men of Power",
        meetingTime: "Every Saturday, 3:00 PM",
        location: "Church Premises",
        description:
          "A men's group focused on spiritual growth and community impact.",
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
        motto: "Ready, Willing, and Able",
        slogan: "Building Men of Valor",
        meetingTime: "Every Friday, 5:00 PM",
        location: "Church Grounds",
        description:
          "A Christ-centered, character-building program for boys and young men.",
      },
    ],
  },
  {
    id: "women",
    name: "Women's Department",
    description:
      "Nurturing women in their faith journey and serving with excellence.",
    motto: "Women of Grace, Women of Strength",
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
        name: "JOY (Jesus, Others, Yourself)",
        motto: "Joyful in serving",
        slogan: "Putting Jesus first, others second, yourself last",
        meetingTime: "Every Wednesday, 5:00 PM",
        location: "Church Hall",
        description:
          "Women's fellowship focused on service and spiritual growth.",
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
        motto: "Single, Saved, and Satisfied",
        slogan: "Living purposefully for Christ",
        meetingTime: "Every Sunday, 2:00 PM",
        location: "Youth Center",
        description:
          "A program for young single adults seeking fellowship and growth.",
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
        motto: "Girls with a Mission",
        slogan: "Shaping tomorrow's women of faith",
        meetingTime: "Every Saturday, 2:00 PM",
        location: "Church Premises",
        description:
          "A program for girls focused on missions, character, and service.",
      },
    ],
  },
  {
    id: "youth",
    name: "Youth Department",
    description:
      "Raising up the next generation of passionate followers of Christ.",
    motto: "On Fire for God",
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
    description:
      "Teaching God's Word to all ages through engaging Bible lessons.",
    motto: "Growing in the Word",
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
    name: "Children's Department",
    description:
      "Creating a fun, safe environment where children can learn about Jesus.",
    motto: "Training up the next generation",
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
    description: "Spreading the gospel through prayer, missions, and worship.",
    motto: "Making disciples of all nations",
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
        motto: "Prayer changes everything",
        slogan: "Standing in the gap",
        meetingTime: "Every Tuesday, 6:00 AM",
        location: "Prayer Room",
        description:
          "Intercessory prayer department for the church and community.",
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
        motto: "Singing unto the Lord",
        meetingTime: "Every Thursday, 6:00 PM",
        location: "Church Auditorium",
        description: "Special music group ministering in song.",
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
        motto: "Praise Him with everything",
        meetingTime: "Every Wednesday, 7:00 PM",
        location: "Church Auditorium",
        description: "Energetic praise team leading worship.",
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
        motto: "Harmonizing for the King",
        meetingTime: "Every Saturday, 4:00 PM",
        location: "Church Auditorium",
        description: "Special choir for department events.",
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
        motto: "Making melody in our hearts",
        slogan: "United voices, one song",
        meetingTime: "Every Saturday, 5:00 PM",
        location: "Church Auditorium",
        description: "Main church choir ministering during worship services.",
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
