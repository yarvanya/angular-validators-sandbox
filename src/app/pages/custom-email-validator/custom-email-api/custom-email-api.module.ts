import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomEmailApiComponent} from './custom-email-api.component';

@NgModule({
  declarations: [CustomEmailApiComponent],
  exports: [CustomEmailApiComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CustomEmailApiModule {}
