export interface Event {
  id: number;
  title: string;
  description: string;
  datetime: string;
}

export interface ServiceInfo {
  time: string;
  timeBreak?: string; // Optional line break in time display
  location: string;
  locationBreak?: string; // Optional line break in location
}
