export type Month = {
  date: number;
  dayOfWeek: string;
  foodCost: number | null;
  fixedCost: number | null;
  id: number;
};
export type Date = {
  year: number;
  month: number;
  day: number;
};

export type DayOfWeek = {
  id: number;
  name: string;
  color: string;
};
