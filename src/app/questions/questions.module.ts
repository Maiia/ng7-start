import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { BBFormlyModule } from '../formly/formly.module';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    BBFormlyModule
  ],
  declarations: [QuestionsComponent]
})
export class QuestionsModule { }
