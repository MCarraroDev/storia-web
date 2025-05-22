export interface HistoricalEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: string;
  importance: 1 | 2 | 3; // 1 = più importante (3 puntini), 2 = medio importante (2 puntini), 3 = meno importante (1 puntino)
}

export interface TimelineSection {
  id: string;
  title: string;
  startYear: number;
  endYear: number;
  events: HistoricalEvent[];
}
