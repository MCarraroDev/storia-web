export interface HistoricalEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: string;
  importance: 1 | 2 | 3; // 1 = molto importante, 3 = meno importante
}

export interface TimelineSection {
  id: string;
  title: string;
  startYear: number;
  endYear: number;
  events: HistoricalEvent[];
}
