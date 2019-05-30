import { ArticleComponent } from "./../article/article.component";
import { Component, OnDestroy } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-modal-comments-container",
  template: ""
})
export class ModalCommentsContainerComponent implements OnDestroy {
  public currentDialog: any = null;
  private destroy: Subject<any> = new Subject<any>();

  public constructor(private modalService: NgbModal, route: ActivatedRoute, router: Router) {
    route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.currentDialog = this.modalService.open(ArticleComponent, { centered: true });
      this.currentDialog.componentInstance.articleId = params.id;
      this.currentDialog.result.then(
        result => {
          router.navigateByUrl("/");
        },
        reason => {
          router.navigateByUrl("/");
        }
      );
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
