import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {TimeComparatorOverviewComponent} from './time-comparator-overview.component';

@NgModule({
  declarations: [TimeComparatorOverviewComponent],
  exports: [TimeComparatorOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class TimeComparatorOverviewModule {}
