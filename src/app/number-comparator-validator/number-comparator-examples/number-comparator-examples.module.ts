import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberComparatorExamplesComponent} from './number-comparator-examples.component';

@NgModule({
  declarations: [NumberComparatorExamplesComponent],
  exports: [NumberComparatorExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NumberComparatorExamplesModule {}
