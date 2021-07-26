import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {DateInRangeOverviewComponent} from './date-in-range-overview.component';

@NgModule({
  declarations: [DateInRangeOverviewComponent],
  exports: [DateInRangeOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class DateInRangeOverviewModule {}
