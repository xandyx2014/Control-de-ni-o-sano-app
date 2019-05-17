import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatecssDirective } from './animatecss.directive';
import { ClickanimatecssDirective } from './clickanimatecss.directive';
import { NumericDirective } from './numeric.directive';

@NgModule({
  declarations: [
    AnimatecssDirective,
    ClickanimatecssDirective,
    NumericDirective
  ],
  exports: [
    AnimatecssDirective,
    ClickanimatecssDirective,
    NumericDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
