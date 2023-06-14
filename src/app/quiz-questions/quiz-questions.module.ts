import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { QuizQuestionsComponent } from './quiz-questions.component';


@NgModule({
  declarations: [ QuizQuestionsComponent ],
  imports: [
    RouterModule.forChild([
      { path: '', component: QuizQuestionsComponent }
    ]),
    SharedModule
  ],
  exports: [],
  providers: [ ]
})
export class QuizQuestionsModule { }
