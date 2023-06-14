import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  {
    path: 'questions',
    loadChildren:() => import('./quiz-questions/quiz-questions.module').then(m => m.QuizQuestionsModule)
  },
  {
    path: 'results',
    loadChildren:() => import('./quiz-results/quiz-results.module').then(m => m.QuizResultsModule)
  },
  {
    path: 'not-found',
    loadChildren:() => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: '**', redirectTo: '/not-found' }
];
