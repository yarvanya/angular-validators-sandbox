import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {TimeComparatorExamplesComponent} from './time-comparator-examples.component';

@NgModule({
  declarations: [TimeComparatorExamplesComponent],
  exports: [TimeComparatorExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class TimeComparatorExamplesModule {}
