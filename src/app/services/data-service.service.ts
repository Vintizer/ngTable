import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, pluck, tap } from "rxjs/operators";

import { IArticle } from "./../models/articles.models";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  public constructor(private http: HttpClient) {}

  public getArticles(): Observable<IArticle[]> {
    return this.http.get("fakeData.json").pipe(
      map(
        (data: { posts: IArticle[] }) => data.posts,
        catchError((err: any) => {
          console.log(err);
          return throwError(err);
        })
      ),
      tap(console.log)
    );
  }
}
