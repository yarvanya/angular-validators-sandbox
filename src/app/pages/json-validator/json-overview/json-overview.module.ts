import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {JsonOverviewComponent} from './json-overview.component';

@NgModule({
  declarations: [JsonOverviewComponent],
  exports: [JsonOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class JsonOverviewModule {}
