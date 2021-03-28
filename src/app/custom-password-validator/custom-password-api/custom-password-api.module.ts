import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPasswordApiComponent} from './custom-password-api.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [CustomPasswordApiComponent],
  exports: [CustomPasswordApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomPasswordApiModule {}
