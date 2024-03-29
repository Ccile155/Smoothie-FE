import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SmoothieComponent } from './smoothie/smoothie.component';
import { DetailComponent } from './detail/detail.component';
import { EditionComponent } from './edition/edition.component';
import { SuccessComponent } from './success/success.component';
import { CVComponent } from './cv/cv.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
  }, {
    path: 'smoothie',
    component: SmoothieComponent,
  }, {
    path: 'details/:id',
    component: DetailComponent,
  }, {
    path: 'edition',
    component: EditionComponent,
  }, {
    path: 'edition/success',
    component: SuccessComponent,
  }, {
    path: 'cv',
    component: CVComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }