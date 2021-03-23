import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {DateComparatorExamplesComponent} from './date-comparator-examples.component';

@NgModule({
  declarations: [DateComparatorExamplesComponent],
  exports: [DateComparatorExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class DateComparatorExamplesModule {}
