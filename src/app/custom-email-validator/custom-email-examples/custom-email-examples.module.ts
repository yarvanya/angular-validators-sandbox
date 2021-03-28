import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomEmailExamplesComponent} from './custom-email-examples.component';

@NgModule({
  declarations: [CustomEmailExamplesComponent],
  exports: [CustomEmailExamplesComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CustomEmailExamplesModule {}
