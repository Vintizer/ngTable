import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IArticle } from './../../models/articles.models';
import { DataService } from './../../services/data-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit, OnDestroy {
  public article: IArticle;
  @Input() public articleId: string;
  private destroy: Subject<boolean> = new Subject<boolean>();

  public constructor(
    private ds: DataService,
    public activeModal: NgbActiveModal
    ) {}

  public ngOnInit(): void {
    this.ds
      .getArticleById(Number(this.articleId))
      .pipe(takeUntil(this.destroy))
      .subscribe((article: IArticle) => (this.article = article));
  }
  public removeComment(id: number, commentIndex: number): void {
    this.ds.removeComment(id, commentIndex);
  }
  public closeModal(): void {
    this.activeModal.close();
  }
  public ngOnDestroy(): void {
    this.destroy.next(true);
  }
}
