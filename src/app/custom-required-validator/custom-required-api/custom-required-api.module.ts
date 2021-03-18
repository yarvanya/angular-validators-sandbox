import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomRequiredApiComponent} from './custom-required-api.component';

@NgModule({
  declarations: [CustomRequiredApiComponent],
  exports: [CustomRequiredApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomRequiredApiModule {}
