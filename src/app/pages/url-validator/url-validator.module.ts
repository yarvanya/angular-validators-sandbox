import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UrlValidatorComponent} from './url-validator.component';
import {SharedModule} from '@shared';
import {UrlApiModule} from './url-api/url-api.module';
import {UrlOverviewModule} from './url-overview/url-overview.module';
import {UrlExamplesModule} from './url-examples/url-examples.module';

const routes: Routes = [
  {
    path: '',
    component: UrlValidatorComponent
  }
];

@NgModule({
  declarations: [UrlValidatorComponent],
  exports: [UrlValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    UrlApiModule,
    UrlOverviewModule,
    UrlExamplesModule
  ]
})
export class UrlValidatorModule {}
