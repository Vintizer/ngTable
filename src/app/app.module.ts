import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ArticlesComponent } from "./components/articles/articles.component";
import { ArticleComponent } from "./components/article/article.component";
import { StatisticComponent } from "./components/statistic/statistic.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { TableArticlesComponent } from './components/table-articles/table-articles.component';

@NgModule({
  declarations: [AppComponent, ArticlesComponent, ArticleComponent, StatisticComponent, CommentsComponent, TableArticlesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
