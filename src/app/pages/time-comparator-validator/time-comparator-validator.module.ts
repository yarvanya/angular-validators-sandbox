import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {TimeComparatorValidatorComponent} from './time-comparator-validator.component';
import {TimeComparatorOverviewModule} from './time-comparator-overview/time-comparator-overview.module';
import {TimeComparatorApiModule} from './time-comparator-api/time-comparator-api.module';
import {TimeComparatorExamplesModule} from './time-comparator-examples/time-comparator-examples.module';

const routes: Routes = [
  {
    path: '',
    component: TimeComparatorValidatorComponent
  }
];

@NgModule({
  declarations: [TimeComparatorValidatorComponent],
  exports: [TimeComparatorValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    TimeComparatorOverviewModule,
    TimeComparatorApiModule,
    TimeComparatorExamplesModule
  ]
})

export class TimeComparatorValidatorModule {}
