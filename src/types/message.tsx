export interface Message {
  id: number;
  content: string;
  userId?: number;
  time: Date;
}