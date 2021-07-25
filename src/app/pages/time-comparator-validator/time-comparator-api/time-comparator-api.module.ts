import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {TimeComparatorApiComponent} from './time-comparator-api.component';

@NgModule({
  declarations: [TimeComparatorApiComponent],
  exports: [TimeComparatorApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class TimeComparatorApiModule {}
