export type ENTRY_STATUS = "pending" | "in-progress" | "completed";

export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: ENTRY_STATUS;
}
