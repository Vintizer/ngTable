import { IArticle } from './../../models/articles.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles$: IArticle[];
  public constructor() { }

  ngOnInit() {
  }

}
