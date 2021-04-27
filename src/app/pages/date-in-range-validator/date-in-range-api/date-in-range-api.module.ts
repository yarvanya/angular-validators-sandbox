import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {DateInRangeApiComponent} from './date-in-range-api.component';

@NgModule({
  declarations: [DateInRangeApiComponent],
  exports: [DateInRangeApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class DateInRangeApiModule {}
