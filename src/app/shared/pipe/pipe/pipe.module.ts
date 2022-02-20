import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparateNumberPipe } from '../seperate-number.pipe';



@NgModule({
  declarations: [SeparateNumberPipe],
  imports: [
    CommonModule
  ],
  exports:[
    SeparateNumberPipe
  ]
})
export class PipeModule { }
