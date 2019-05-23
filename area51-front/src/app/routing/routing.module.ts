import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from '../sales/sales/sales.component';

const routes: Routes = [
  {
    path: 'sales',
    component: SalesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
