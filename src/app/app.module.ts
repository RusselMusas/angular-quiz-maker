import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { QuizService } from './services/quiz.service';

import { AppComponent } from './app.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DecodeHtml } from './pipes/decode-html.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', component: QuizQuestionsComponent },
  { path: 'results', component: QuizResultsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    QuizResultsComponent,
    QuizQuestionsComponent,
    NotFoundComponent,
    DecodeHtml
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProcessHttpmsgService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
