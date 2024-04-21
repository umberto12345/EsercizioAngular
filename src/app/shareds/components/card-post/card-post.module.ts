import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {     CardPostComponent} from './card-post.component';

@NgModule({
  declarations: [
    CardPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardPostComponent
  ]
})
export class CardPostModule { }
