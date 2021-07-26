import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {DateComparatorExamplesModule} from './date-comparator-examples/date-comparator-examples.module';
import {DateComparatorApiModule} from './date-comparator-api/date-comparator-api.module';
import {DateComparatorOverviewModule} from './date-comparator-overview/date-comparator-overview.module';
import {DateComparatorValidatorComponent} from './date-comparator-validator.component';

const routes: Routes = [
  {
    path: '',
    component: DateComparatorValidatorComponent
  }
];

@NgModule({
  declarations: [DateComparatorValidatorComponent],
  exports: [DateComparatorValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DateComparatorExamplesModule,
    DateComparatorApiModule,
    DateComparatorOverviewModule
  ]
})

export class DateComparatorValidatorModule {}
