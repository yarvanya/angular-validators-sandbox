import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberInRangeApiComponent} from './number-in-range-api.component';

@NgModule({
  declarations: [NumberInRangeApiComponent],
  exports: [NumberInRangeApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class NumberInRangeApiModule {}
