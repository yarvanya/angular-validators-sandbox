import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UuidValidatorComponent} from './uuid-validator.component';
import {SharedModule} from '@shared';
import {UuidApiModule} from './uuid-api/uuid-api.module';
import {UuidOverviewModule} from './uuid-overview/uuid-overview.module';
import {UuidExamplesModule} from './uuid-examples/uuid-examples.module';

const routes: Routes = [
  {
    path: '',
    component: UuidValidatorComponent
  }
];

@NgModule({
  declarations: [UuidValidatorComponent],
  exports: [UuidValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    UuidApiModule,
    UuidOverviewModule,
    UuidExamplesModule
  ]
})
export class UuidValidatorModule {}
