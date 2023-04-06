export const BASE_URL = "https://mate.academy/students-api";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string,
  phone: string;
}
export interface Post {
  id: number;
  userId: number;
  title:string;
  body: string;
}
export interface Comment {
  id: number;
  postId: number;
  name: string;
  email:string;
  body: string;
}
