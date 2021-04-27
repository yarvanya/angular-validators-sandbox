import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {PostCodeOverviewComponent} from './post-code-overview.component';

@NgModule({
  declarations: [PostCodeOverviewComponent],
  exports: [PostCodeOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class PostCodeOverviewModule {}
