export type Post = {
  id: number;
  username: string;
  title: string;
  body: string;
  content: string;
  createdAt:Date;
}

export type ApplicationError = {
  name: string;
  message: string;
};