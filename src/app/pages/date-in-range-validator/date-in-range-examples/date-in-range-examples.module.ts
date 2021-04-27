import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {DateInRangeExamplesComponent} from './date-in-range-examples.component';

@NgModule({
  declarations: [DateInRangeExamplesComponent],
  exports: [DateInRangeExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class DateInRangeExamplesModule {}
