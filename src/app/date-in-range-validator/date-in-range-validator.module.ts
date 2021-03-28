import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {DateInRangeValidatorComponent} from './date-in-range-validator.component';
import {DateInRangeOverviewModule} from './date-in-range-overview/date-in-range-overview.module';
import {DateInRangeApiModule} from './date-in-range-api/date-in-range-api.module';
import {DateInRangeExamplesModule} from './date-in-range-examples/date-in-range-examples.module';

const routes: Routes = [
  {
    path: '',
    component: DateInRangeValidatorComponent
  }
];

@NgModule({
  declarations: [DateInRangeValidatorComponent],
  exports: [DateInRangeValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DateInRangeOverviewModule,
    DateInRangeApiModule,
    DateInRangeExamplesModule
  ]
})

export class DateInRangeValidatorModule {}
