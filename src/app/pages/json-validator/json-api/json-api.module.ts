import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {JsonApiComponent} from './json-api.component';

@NgModule({
  declarations: [JsonApiComponent],
  exports: [JsonApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class JsonApiModule {}
