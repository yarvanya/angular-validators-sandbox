import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared';
import {PostCodeValidatorComponent} from './post-code-validator.component';
import {PostCodeOverviewModule} from './post-code-overview/post-code-overview.module';
import {PostCodeApiModule} from './post-code-api/post-code-api.module';
import {PostCodeExamplesModule} from './post-code-examples/post-code-examples.module';

const routes: Routes = [
  {
    path: '',
    component: PostCodeValidatorComponent
  }
];

@NgModule({
  declarations: [PostCodeValidatorComponent],
  exports: [PostCodeValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    PostCodeOverviewModule,
    PostCodeApiModule,
    PostCodeExamplesModule
  ]
})

export class PostCodeValidatorModule {}
