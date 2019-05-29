import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { IArticle } from "./../../models/articles.models";
import { DataServiceService } from "./../../services/data-service.service";

@Component({
  selector: "app-table-articles",
  templateUrl: "./table-articles.component.html",
  styleUrls: ["./table-articles.component.css"]
})
export class TableArticlesComponent implements OnInit {
  @Input() public articles: IArticle[];
  public constructor(private ds: DataServiceService, private router: Router) {}

  ngOnInit() {}
  showComments(id: number) {
    this.router.navigate([`${id}`]);
  }
  removeArticle(id: number) {
    this.ds.removeArticle(id);
  }
}
