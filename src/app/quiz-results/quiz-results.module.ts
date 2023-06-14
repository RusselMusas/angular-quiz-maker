import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { QuizResultsComponent } from './quiz-results.component';


@NgModule({
  declarations: [ QuizResultsComponent ],
  imports: [
    RouterModule.forChild([
      { path: '', component: QuizResultsComponent }
    ]),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class QuizResultsModule { }
