import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {DateComparatorOverviewComponent} from './date-comparator-overview.component';

@NgModule({
  declarations: [DateComparatorOverviewComponent],
  exports: [DateComparatorOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class DateComparatorOverviewModule {}
