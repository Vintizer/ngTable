export interface IComment {
  date: string;
  text: string;
}
export interface IArticle {
  postId: number;
  name: string;
  date: string;
  comments: IComment[];
}
