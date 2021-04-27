import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UrlOverviewComponent} from './url-overview.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [UrlOverviewComponent],
  exports: [UrlOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UrlOverviewModule {}
