import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';

import * as fromDirectives from './directives';
import * as fromPipes from './pipes';
import * as fromComponents from './components';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ...fromComponents.components,
    BreadcrumbsComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ...fromComponents.components
  ]
})
export class SharedModule {}
