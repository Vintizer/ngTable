import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

import { IArticle } from './../models/articles.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public articlesSubject: BehaviorSubject<IArticle[]> = new BehaviorSubject([]);
  public articles$: Observable<IArticle[]> = this.articlesSubject.asObservable();

  public constructor(private http: HttpClient) {
    this.http
      .get('assets/fakeData.json')
      .pipe(
        map((data: { posts: IArticle[] }) => data.posts),
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            alert(`Sorry, ${err.message}`);
          }
          return throwError(err);
        })
      )
      .subscribe((articles: IArticle[]) => {
        if (articles) {
          this.articlesSubject.next(articles);
        } else {
          alert('Sorry, file has wrong structure');
        }
      });
  }
  public getArticleById(id: number): Observable<IArticle> {
    return this.articles$.pipe(
      filter((articles: IArticle[]) => articles.length > 0),
      map((articles: IArticle[]) => articles.find((article: IArticle) => article.postId === id))
    );
  }
  public removeArticle(id: number): void {
    const curArticles: IArticle[] = this.articlesSubject.getValue();
    const filteredArticles: IArticle[] = curArticles.filter((article: IArticle) => article.postId !== id);
    this.articlesSubject.next(filteredArticles);
  }
  public removeComment(id: number, index: number): void {
    const curArticles: IArticle[] = this.articlesSubject.getValue();
    const curArticleIndex: number = curArticles.findIndex((article: IArticle) => article.postId === id);
    const curArticle: IArticle = curArticles[curArticleIndex];
    const newArticle: IArticle = {
      ...curArticle,
      comments: [...curArticle.comments.slice(0, index), ...curArticle.comments.slice(index + 1)]
    };
    const newArticles: IArticle[] = [
      ...curArticles.slice(0, curArticleIndex),
      newArticle,
      ...curArticles.slice(curArticleIndex + 1)
    ];
    this.articlesSubject.next(newArticles);
  }
}
