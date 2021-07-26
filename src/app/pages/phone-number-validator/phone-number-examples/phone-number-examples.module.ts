import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {PhoneNumberExamplesComponent} from './phone-number-examples.component';

@NgModule({
  declarations: [PhoneNumberExamplesComponent],
  exports: [PhoneNumberExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class PhoneNumberExamplesModule {}
