import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberInRangeExamplesComponent} from './number-in-range-examples.component';

@NgModule({
  declarations: [NumberInRangeExamplesComponent],
  exports: [NumberInRangeExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class NumberInRangeExamplesModule {}
