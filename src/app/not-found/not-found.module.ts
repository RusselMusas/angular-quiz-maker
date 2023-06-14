import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    RouterModule.forChild([
      { path: '', component: NotFoundComponent }
    ]),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class NotFoundModule { }
