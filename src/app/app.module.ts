import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import {
  ModalCommentsContainerComponent
} from './components/modal-comments-container/modal-comments-container.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TableArticlesComponent } from './components/table-articles/table-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    StatisticComponent,
    TableArticlesComponent,
    ModalCommentsContainerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ArticleComponent]
})
export class AppModule {}
