import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {NumberInRangeValidatorComponent} from './number-in-range-validator.component';
import {NumberInRangeOverviewModule} from './number-in-range-overview/number-in-range-overview.module';
import {NumberInRangeApiModule} from './number-in-range-api/number-in-range-api.module';
import {NumberInRangeExamplesModule} from './number-in-range-examples/number-in-range-examples.module';

const routes: Routes = [
  {
    path: '',
    component: NumberInRangeValidatorComponent
  }
];

@NgModule({
  declarations: [NumberInRangeValidatorComponent],
  exports: [NumberInRangeValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NumberInRangeOverviewModule,
    NumberInRangeApiModule,
    NumberInRangeExamplesModule
  ]
})

export class NumberInRangeValidatorModule {}
