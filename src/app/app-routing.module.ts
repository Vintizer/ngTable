import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ModalCommentsContainerComponent
 } from './components/modal-comments-container/modal-comments-container.component';

const routes: Routes = [{ path: ':id', component: ModalCommentsContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
