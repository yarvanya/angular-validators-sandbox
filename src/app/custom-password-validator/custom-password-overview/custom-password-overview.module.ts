import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPasswordOverviewComponent} from './custom-password-overview.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [CustomPasswordOverviewComponent],
  exports: [CustomPasswordOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomPasswordOverviewModule {}
