import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "./common/constant";
import {Home} from "./component/home/home";

const routes: Routes = [
  { path: '', redirectTo: Constant.path_home, pathMatch: 'full' },
  { path: Constant.path_home, component: Home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
