import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomEmailOverviewComponent} from './custom-email-overview.component';

@NgModule({
  declarations: [CustomEmailOverviewComponent],
  exports: [CustomEmailOverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CustomEmailOverviewModule {}
