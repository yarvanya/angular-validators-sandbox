import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UuidExamplesComponent} from './uuid-examples.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [UuidExamplesComponent],
  exports: [UuidExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UuidExamplesModule {}
