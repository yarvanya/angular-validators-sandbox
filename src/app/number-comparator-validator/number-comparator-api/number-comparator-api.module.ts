import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberComparatorApiComponent} from './number-comparator-api.component';

@NgModule({
  declarations: [NumberComparatorApiComponent],
  exports: [NumberComparatorApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class NumberComparatorApiModule {}
