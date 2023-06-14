import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { QuizService } from './services/quiz.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    ProcessHttpmsgService,
    QuizService
  ]
})
export class CoreModule { }
