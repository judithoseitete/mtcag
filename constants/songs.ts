export interface SongLine {
  primary: string; // Main language line
  translation?: string; // Translation in brackets
}

export interface SongSection {
  type: "verse" | "chorus" | "bridge" | "intro" | "outro";
  number?: number; // For verses (Verse 1, Verse 2, etc.)
  lines: SongLine[];
}

export interface Song {
  id: number;
  title: string;
  titleTranslation?: string;
  primaryLanguage: "English" | "Twi";
  category: "Hymn" | "Worship" | "Praises" | "Contemporary";
  sections: SongSection[];
  author?: string;
  year?: number;
  notes?: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Amazing Grace",
    primaryLanguage: "English",
    category: "Hymn",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "Amazing grace" },
          { primary: "How sweet the sound" },
          { primary: "That saved a wretch like me" },
        ],
      },
      {
        type: "verse",
        number: 2,
        lines: [
          { primary: "Through many dangers" },
          { primary: "Toils and snares" },
          { primary: "I have already come" },
        ],
      },
    ],
    author: "John Newton",
    year: 1779,
  },
  {
    id: 2,
    title: "Awurade Ye",
    titleTranslation: "The Lord is Good",
    primaryLanguage: "Twi",
    category: "Worship",
    sections: [
      {
        type: "chorus",
        lines: [
          { primary: "Awurade ye", translation: "The Lord is good" },
          { primary: "Ɔyɛ papa", translation: "He is gracious" },
          {
            primary: "N'adɔe wɔ hɔ daa",
            translation: "His love endures forever",
          },
        ],
      },
      {
        type: "verse",
        number: 1,
        lines: [
          {
            primary: "Me kra kamfo Awurade",
            translation: "My soul magnifies the Lord",
          },
          {
            primary: "Me de m'ani to ne so",
            translation: "I fix my eyes on Him",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Blessed Assurance",
    primaryLanguage: "English",
    category: "Hymn",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "Blessed assurance" },
          { primary: "Jesus is mine" },
          { primary: "O what a foretaste" },
          { primary: "Of glory divine" },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "This is my story" },
          { primary: "This is my song" },
          { primary: "Praising my Savior" },
          { primary: "All the day long" },
        ],
      },
    ],
    author: "Fanny Crosby",
    year: 1873,
  },
  {
    id: 4,
    title: "How Great Thou Art",
    primaryLanguage: "English",
    category: "Hymn",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "O Lord my God" },
          { primary: "When I in awesome wonder" },
          { primary: "Consider all the worlds" },
          { primary: "Thy hands have made" },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "Then sings my soul" },
          { primary: "My Savior God to Thee" },
          { primary: "How great Thou art" },
          { primary: "How great Thou art" },
        ],
      },
      {
        type: "verse",
        number: 2,
        lines: [
          { primary: "When through the woods" },
          { primary: "And forest glades I wander" },
          { primary: "And hear the birds" },
          { primary: "Sing sweetly in the trees" },
        ],
      },
    ],
    author: "Carl Boberg",
    year: 1885,
  },
  {
    id: 5,
    title: "Me kra kamfo Awurade",
    titleTranslation: "Bless the Lord O my soul",
    primaryLanguage: "Twi",
    category: "Praises",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          {
            primary: "Me kra kamfo Awurade",
            translation: "Bless the Lord O my soul",
          },
          { primary: "Ne nhyira nyinaa", translation: "All that is within me" },
          {
            primary: "Kamfo ne din kronkron",
            translation: "Bless His holy name",
          },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "Ɔyɛ papa", translation: "He is good" },
          { primary: "Ɔyɛ nokware", translation: "He is faithful" },
          {
            primary: "N'adɔe wɔ hɔ daa",
            translation: "His love endures forever",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "What a Friend We Have in Jesus",
    primaryLanguage: "English",
    category: "Hymn",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "What a friend we have in Jesus" },
          { primary: "All our sins and griefs to bear" },
          { primary: "What a privilege to carry" },
          { primary: "Everything to God in prayer" },
        ],
      },
      {
        type: "verse",
        number: 2,
        lines: [
          { primary: "Have we trials and temptations" },
          { primary: "Is there trouble anywhere" },
          { primary: "We should never be discouraged" },
          { primary: "Take it to the Lord in prayer" },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "O what peace we often forfeit" },
          { primary: "O what needless pain we bear" },
          { primary: "All because we do not carry" },
          { primary: "Everything to God in prayer" },
        ],
      },
    ],
    author: "Joseph M. Scriven",
    year: 1855,
  },
  {
    id: 7,
    title: "Meda w'ase",
    titleTranslation: "I thank You",
    primaryLanguage: "Twi",
    category: "Contemporary",
    sections: [
      {
        type: "chorus",
        lines: [
          { primary: "Meda w'ase", translation: "I thank You" },
          { primary: "Meda w'ase", translation: "I thank You" },
          {
            primary: "Nea woayɛ ama me yi",
            translation: "For all that You've done for me",
          },
          { primary: "Meda w'ase", translation: "I thank You" },
        ],
      },
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "Woagyee me nkwa", translation: "You saved my life" },
          {
            primary: "Woayɛ pii ma me",
            translation: "You've done so much for me",
          },
          {
            primary: "Mede m'aseda brɛ wo",
            translation: "I bring my thanksgiving to You",
          },
        ],
      },
      {
        type: "verse",
        number: 2,
        lines: [
          { primary: "W'ayɛ me papa", translation: "You've been good to me" },
          {
            primary: "W'adom atra me so",
            translation: "Your grace has covered me",
          },
          { primary: "Me kra kamfo wo", translation: "My soul magnifies You" },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Great Is Thy Faithfulness",
    primaryLanguage: "English",
    category: "Hymn",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "Great is Thy faithfulness" },
          { primary: "O God my Father" },
          { primary: "There is no shadow" },
          { primary: "Of turning with Thee" },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "Great is Thy faithfulness" },
          { primary: "Great is Thy faithfulness" },
          { primary: "Morning by morning" },
          { primary: "New mercies I see" },
        ],
      },
    ],
    author: "Thomas Chisholm",
    year: 1923,
  },
  {
    id: 9,
    title: "Yesu me haw nua",
    titleTranslation: "Jesus my brother in trials",
    primaryLanguage: "Twi",
    category: "Worship",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          {
            primary: "Yesu me haw nua",
            translation: "Jesus my brother in trials",
          },
          {
            primary: "Awerɛhow mu adamfo",
            translation: "Friend in times of sorrow",
          },
          { primary: "Me su wo nkyɛn a", translation: "When I cry to You" },
          { primary: "Wotie me", translation: "You hear me" },
        ],
      },
      {
        type: "chorus",
        lines: [
          {
            primary: "Me gyae wo to ntwɛn",
            translation: "I lean on You and wait",
          },
          { primary: "Wone me wɔ ha", translation: "You are with me here" },
          {
            primary: "Wo bra ma me ahotɔ",
            translation: "Your presence gives me peace",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Holy Spirit Rain Down",
    titleTranslation: "Honhom Kronkron sian ba",
    primaryLanguage: "English",
    category: "Contemporary",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          {
            primary: "Holy Spirit rain down",
            translation: "Honhom Kronkron sian ba",
          },
          { primary: "Rain down", translation: "Sian ba" },
          {
            primary: "O Comforter and Friend",
            translation: "Awerɛkyekyefo ne adamfo",
          },
          {
            primary: "How we need Your touch again",
            translation: "Yɛhia wo nsa bio",
          },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "Let it rain", translation: "Ma ɛnto" },
          { primary: "Let it rain", translation: "Ma ɛnto" },
          {
            primary: "Open the flood gates of heaven",
            translation: "Bue ɔsoro apono",
          },
          { primary: "Let it rain", translation: "Ma ɛnto" },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Nyame nhyira ne wo",
    titleTranslation: "God bless you",
    primaryLanguage: "Twi",
    category: "Praises",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "Nyame nhyira ne wo", translation: "God bless you" },
          { primary: "Nyame nkye ne wo", translation: "God be with you" },
          {
            primary: "Kosii sɛ yɛbɛhyia bio",
            translation: "Until we meet again",
          },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "Da yie", translation: "Goodbye" },
          { primary: "Da yie", translation: "Goodbye" },
          { primary: "Kosii sɛ yɛbɛhyia", translation: "Until we meet" },
          { primary: "Onyankopɔn nkyɛn", translation: "At God's feet" },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "It Is Well With My Soul",
    primaryLanguage: "English",
    category: "Hymn",
    sections: [
      {
        type: "verse",
        number: 1,
        lines: [
          { primary: "When peace like a river" },
          { primary: "Attendeth my way" },
          { primary: "When sorrows like sea billows roll" },
          { primary: "Whatever my lot" },
          { primary: "Thou hast taught me to say" },
        ],
      },
      {
        type: "chorus",
        lines: [
          { primary: "It is well" },
          { primary: "It is well with my soul" },
          { primary: "It is well" },
          { primary: "It is well with my soul" },
        ],
      },
    ],
    author: "Horatio Spafford",
    year: 1873,
  },
];
