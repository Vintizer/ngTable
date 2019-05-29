import { DataServiceService } from "./../../services/data-service.service";
import { IArticle } from "./../../models/articles.models";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  public articles: IArticle[];
  public commentsLength: number;
  public constructor(private ds: DataServiceService) {}

  public ngOnInit(): void {
    this.ds.articles$.subscribe((articles: IArticle[]) => {
      this.articles = articles;
      this.commentsLength = articles.reduce((acc: number, val: IArticle) => acc + val.comments.length, 0);
    });
  }
}
