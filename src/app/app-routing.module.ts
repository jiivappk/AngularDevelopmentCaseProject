import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TableDataComponent} from './table-data/table-data.component';
import {UserPostComponent} from './user-post/user-post.component';

const routes: Routes = [
  {path:'',component:TableDataComponent,pathMatch:'full'},
  {path:'posts/:userId',component:UserPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
