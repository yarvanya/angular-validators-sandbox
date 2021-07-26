import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {JsonExamplesComponent} from './json-examples.component';

@NgModule({
  declarations: [JsonExamplesComponent],
  exports: [JsonExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class JsonExamplesModule {}
