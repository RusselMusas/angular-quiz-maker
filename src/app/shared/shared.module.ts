import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DecodeHtml } from './pipes/decode-html.pipe';


@NgModule({
  declarations: [ DecodeHtml ],
  imports: [ CommonModule ],
  exports: [
    DecodeHtml,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ]
})
export class SharedModule { }
