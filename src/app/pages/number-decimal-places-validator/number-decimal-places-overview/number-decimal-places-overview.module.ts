import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberDecimalPlacesOverviewComponent} from './number-decimal-places-overview.component';

@NgModule({
  declarations: [NumberDecimalPlacesOverviewComponent],
  exports: [NumberDecimalPlacesOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class NumberDecimalPlacesOverviewModule {}
