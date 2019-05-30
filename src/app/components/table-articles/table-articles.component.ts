import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IArticle } from './../../models/articles.models';
import { DataService } from './../../services/data-service.service';

@Component({
  selector: 'app-table-articles',
  templateUrl: './table-articles.component.html',
  styleUrls: ['./table-articles.component.css']
})

export class TableArticlesComponent implements OnInit {
  @Input() public articles: IArticle[];
  public constructor(private ds: DataService, private router: Router) {}

  public ngOnInit(): void {}
  public showComments(id: number): void {
    this.router.navigate([`${id}`]);
  }
  public removeArticle(id: number): void {
    this.ds.removeArticle(id);
  }
}
