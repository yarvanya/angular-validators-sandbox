import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberInRangeOverviewComponent} from './number-in-range-overview.component';

@NgModule({
  declarations: [NumberInRangeOverviewComponent],
  exports: [NumberInRangeOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class NumberInRangeOverviewModule {}
