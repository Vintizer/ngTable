import { DataServiceService } from "./../../services/data-service.service";
import { IArticle } from "./../../models/articles.models";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  public article: IArticle;
  public constructor(private ds: DataServiceService) {}

  public ngOnInit(): void {
    this.ds.getArticleById(3).subscribe((article: IArticle) => (this.article = article));
  }
}
