import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberDecimalPlacesExamplesComponent} from './number-decimal-places-examples.component';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';

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
