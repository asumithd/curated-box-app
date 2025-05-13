import { Routes } from '@angular/router';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'boxes', pathMatch: 'full' },
  { path: 'boxes', component: BoxListComponent },
  { path: 'detail/:id', component: BoxDetailComponent },
  { path: 'subscribe/:id', component: SubscribeComponent },
  { path: '**', redirectTo: 'boxes' },
];
