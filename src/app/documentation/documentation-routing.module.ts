import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

const routes: Routes = [
  // { path: 'documentation', component: DocumentationComponent }
  {
    path: 'documentation',
    redirectTo: 'documentation/question_1',
    pathMatch: 'full'
  },
  {
    path: 'documentation/:id',
    component: DocumentationComponent,
    data: { state: 'documentation/:id' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {}
