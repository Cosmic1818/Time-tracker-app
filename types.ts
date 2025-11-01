export enum QuoteCategory {
    Concentration = "Concentration",
    Knowledge = "Knowledge",
    Perseverance = "Perseverance",
    MentalStrength = "Mental Strength",
    Dharma = "Dharma",
    SelfDiscipline = "Self-Discipline",
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
