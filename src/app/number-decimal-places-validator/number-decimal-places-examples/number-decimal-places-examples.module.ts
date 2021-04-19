import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberDecimalPlacesExamplesComponent} from './number-decimal-places-examples.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [NumberDecimalPlacesExamplesComponent],
  exports: [NumberDecimalPlacesExamplesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSlideToggleModule
  ]
})

export class NumberDecimalPlacesExamplesModule {}
