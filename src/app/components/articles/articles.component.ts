import { DataService } from './../../services/data-service.service';
import { IArticle } from './../../models/articles.models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit, OnDestroy {
  public articles: IArticle[];
  public commentsLength: number;
  private destroy: Subject<boolean> = new Subject<boolean>();

  public constructor(private ds: DataService) {}

  public ngOnInit(): void {
    this.ds.articles$.pipe(takeUntil(this.destroy)).subscribe((articles: IArticle[]) => {
      this.articles = articles;
      this.commentsLength = articles.reduce((acc: number, val: IArticle) => acc + val.comments.length, 0);
    });
  }
  public ngOnDestroy(): void {
    this.destroy.next(true);
  }
}
