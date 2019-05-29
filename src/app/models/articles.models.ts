export interface IComment {
  date: string;
  text: string;
}
export interface IArticle {
  postId: number;
  name: string;
  date: string;
  content: string;
  comments: IComment[];
}
