import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared';
import {JsonValidatorComponent} from './json-validator.component';
import {JsonOverviewModule} from './json-overview/json-overview.module';
import {JsonApiModule} from './json-api/json-api.module';
import {JsonExamplesModule} from './json-examples/json-examples.module';

const routes: Routes = [
  {
    path: '',
    component: JsonValidatorComponent
  }
];

@NgModule({
  declarations: [JsonValidatorComponent],
  exports: [JsonValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    JsonOverviewModule,
    JsonApiModule,
    JsonExamplesModule
  ]
})

export class JsonValidatorModule {}
