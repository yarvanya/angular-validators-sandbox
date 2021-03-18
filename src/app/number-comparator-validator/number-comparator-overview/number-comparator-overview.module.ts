import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberComparatorOverviewComponent} from './number-comparator-overview.component';

@NgModule({
  declarations: [NumberComparatorOverviewComponent],
  exports: [NumberComparatorOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NumberComparatorOverviewModule {}
