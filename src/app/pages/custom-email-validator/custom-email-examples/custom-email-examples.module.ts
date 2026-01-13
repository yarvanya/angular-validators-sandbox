import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomEmailExamplesComponent} from './custom-email-examples.component';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';

@NgModule({
  declarations: [CustomEmailExamplesComponent],
  exports: [CustomEmailExamplesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSlideToggleModule
  ]
})
export class CustomEmailExamplesModule {}
