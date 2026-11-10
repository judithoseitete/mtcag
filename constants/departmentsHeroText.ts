export const getDepartmentHeroText = (departmentName: string): string => {
  // Map specific departments to custom hero text
  const heroTextMap: Record<string, string> = {
    "Men's Ministry": "action, now.",
    "Women's Ministry": "women who work for the Lord.",
    "Youth Ministry": "the youth alive, the work is done.",
    "Children's Ministry": "friends of Jesus.",
    Ushering: "welcoming with excellence.",
    Choir: "worship through song.",
    Protocol: "order and excellence.",
    Media: "capturing moments.",
    Missions: "reaching the world.",
    Music: "making melodies.",
    Pathfinders: "young men of destiny.",
    "Royal Rangers": "ready for anything.",
    "Sunday School": "it's God's business.",
    Missionette: "because we care, we serve.",
    JOY: "Jesus, others, yourself.",
  };

  return heroTextMap[departmentName] || `serving with purpose.`;
};
