import { User } from "./user.interface";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
  user?: User;
}
