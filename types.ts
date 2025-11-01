export enum QuoteCategory {
    Focus = "Focus", // (एकाग्रता)
    Determination = "Determination", // (दृढ़ निश्चय)
    Buddhi = "Buddhi (Intellect)", // (बुद्धि)
    Vidya = "Vidya (Knowledge)", // (विद्या)
    Gyan = "Gyan (Wisdom)", // (ज्ञान)
    GyanForStudent = "Gyan for Students", // (विद्यार्थी ज्ञान)
}

export interface Quote {
  text: string; // Sanskrit Shloka
  translation: string; // Hindi Translation
  source: string;
  category: QuoteCategory;
}

export interface Badge {
  id: number;
  name: string;
  sessionsRequired: number;
  imageUrl: string;
  description: string;
}

export interface Settings {
  soundEnabled: boolean;
  timerLength: number;
  shortBreak: number;
  longBreak: number;
}
