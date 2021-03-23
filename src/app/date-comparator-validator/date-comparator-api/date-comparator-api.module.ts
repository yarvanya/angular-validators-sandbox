import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {DateComparatorApiComponent} from './date-comparator-api.component';

@NgModule({
  declarations: [DateComparatorApiComponent],
  exports: [DateComparatorApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class DateComparatorApiModule {}
