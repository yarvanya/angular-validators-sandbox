import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UuidApiComponent} from './uuid-api.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [UuidApiComponent],
  exports: [UuidApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UuidApiModule {}
