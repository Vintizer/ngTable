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
  @Input() public articleId: string;

  public constructor(private ds: DataServiceService) {}

  public ngOnInit(): void {
    this.ds.getArticleById(Number(this.articleId)).subscribe((article: IArticle) => (this.article = article));
  }
  public removeComment(id: number, commentIndex: number): void {
    this.ds.removeComment(id, commentIndex);
  }
}
