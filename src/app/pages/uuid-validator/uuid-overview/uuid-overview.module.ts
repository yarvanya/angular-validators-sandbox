import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UuidOverviewComponent} from './uuid-overview.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [UuidOverviewComponent],
  exports: [UuidOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UuidOverviewModule {}
