import { ModalCommentsContainerComponent } from "./components/modal-comments-container/modal-comments-container.component";
import { ArticleComponent } from "./components/article/article.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: ":id", component: ModalCommentsContainerComponent }];

// const routes: Routes = [
//   {
//     path: "",
//     component: ArticlesComponent
//   },
//   {
//     path: ":id",
//     component: ArticleComponent,
//     children: [
//       {
//         path: "",
//         component: ArticleComponent
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
