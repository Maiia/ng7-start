import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: '../app/counter/counter.module#CounterModule'
  },
  {
    path: 'cats',
    loadChildren: '../app/cats/cats.module#CatsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
