import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { QuizService } from './services/quiz.service';


@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    ProcessHttpmsgService,
    QuizService
  ]
})
export class CoreModule { }
