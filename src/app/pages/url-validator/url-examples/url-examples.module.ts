import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UrlExamplesComponent} from './url-examples.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [UrlExamplesComponent],
  exports: [UrlExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UrlExamplesModule {}
