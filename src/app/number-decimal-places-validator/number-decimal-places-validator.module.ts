import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {NumberDecimalPlacesValidatorComponent} from './number-decimal-places-validator.component';
import {NumberDecimalPlacesApiModule} from './number-decimal-places-api/number-decimal-places-api.module';
import {NumberDecimalPlacesOverviewModule} from './number-decimal-places-overview/number-decimal-places-overview.module';
import {NumberDecimalPlacesExamplesModule} from './number-decimal-places-examples/number-decimal-places-examples.module';

const routes: Routes = [
  {
    path: '',
    component: NumberDecimalPlacesValidatorComponent
  }
];

@NgModule({
  declarations: [NumberDecimalPlacesValidatorComponent],
  exports: [NumberDecimalPlacesValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NumberDecimalPlacesApiModule,
    NumberDecimalPlacesOverviewModule,
    NumberDecimalPlacesExamplesModule
  ]
})

export class NumberDecimalPlacesValidatorModule {}
