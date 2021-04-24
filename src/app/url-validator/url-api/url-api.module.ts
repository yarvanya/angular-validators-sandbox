import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UrlApiComponent} from './url-api.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [UrlApiComponent],
  exports: [UrlApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UrlApiModule {}
