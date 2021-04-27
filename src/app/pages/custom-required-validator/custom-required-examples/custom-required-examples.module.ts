import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomRequiredExamplesComponent} from './custom-required-examples.component';

@NgModule({
  declarations: [CustomRequiredExamplesComponent],
  exports: [CustomRequiredExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomRequiredExamplesModule {}
