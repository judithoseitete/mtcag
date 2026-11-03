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

// Import all song JSON files
import amazingGrace from "@/data/songs/amazing-grace.json";
import awuradeYe from "@/data/songs/awurade-ye.json";
import blessedAssurance from "@/data/songs/blessed-assurance.json";
import howGreatThouArt from "@/data/songs/how-great-thou-art.json";
import meKraKamfo from "@/data/songs/me-kra-kamfo-awurade.json";
import whatAFriend from "@/data/songs/what-a-friend.json";
import medaWase from "@/data/songs/meda-wase.json";
import greatIsThy from "@/data/songs/great-is-thy-faithfulness.json";
import yesuMeHaw from "@/data/songs/yesu-me-haw-nua.json";
import holySpiritRain from "@/data/songs/holy-spirit-rain-down.json";
import nyameNhyira from "@/data/songs/nyame-nhyira-ne-wo.json";
import itIsWell from "@/data/songs/it-is-well.json";

export const songs: Song[] = [
  amazingGrace,
  awuradeYe,
  blessedAssurance,
  howGreatThouArt,
  meKraKamfo,
  whatAFriend,
  medaWase,
  greatIsThy,
  yesuMeHaw,
  holySpiritRain,
  nyameNhyira,
  itIsWell,
] as Song[];
