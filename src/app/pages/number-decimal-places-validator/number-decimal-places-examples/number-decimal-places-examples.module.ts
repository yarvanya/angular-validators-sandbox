import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberDecimalPlacesExamplesComponent} from './number-decimal-places-examples.component';

@NgModule({
  declarations: [NumberDecimalPlacesExamplesComponent],
  exports: [NumberDecimalPlacesExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class NumberDecimalPlacesExamplesModule {}
