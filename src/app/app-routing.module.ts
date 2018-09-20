import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TickerSearchComponent } from './ticker-search/ticker-search.component';

const routes: Routes = [
  {
    path: 'search-ticker',
    component: TickerSearchComponent
  },
  {
    path: '',
    redirectTo: 'search-ticker',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
