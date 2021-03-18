import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {NumberComparatorValidatorComponent} from './number-comparator-validator.component';
import {NumberComparatorExamplesModule} from './number-comparator-examples/number-comparator-examples.module';
import {NumberComparatorApiModule} from './number-comparator-api/number-comparator-api.module';
import {NumberComparatorOverviewModule} from './number-comparator-overview/number-comparator-overview.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NumberComparatorValidatorComponent
  }
];

@NgModule({
  declarations: [NumberComparatorValidatorComponent],
  exports: [NumberComparatorValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NumberComparatorExamplesModule,
    NumberComparatorApiModule,
    NumberComparatorOverviewModule
  ]
})
export class NumberComparatorValidatorModule {}
