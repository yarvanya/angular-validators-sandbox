import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberDecimalPlacesApiComponent} from './number-decimal-places-api.component';

@NgModule({
  declarations: [NumberDecimalPlacesApiComponent],
  exports: [NumberDecimalPlacesApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class NumberDecimalPlacesApiModule {}
