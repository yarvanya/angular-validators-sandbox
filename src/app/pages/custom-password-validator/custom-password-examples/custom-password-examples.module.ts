import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPasswordExamplesComponent} from './custom-password-examples.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [CustomPasswordExamplesComponent],
  exports: [CustomPasswordExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomPasswordExamplesModule {
}
