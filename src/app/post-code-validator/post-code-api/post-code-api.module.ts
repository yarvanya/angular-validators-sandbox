import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {PostCodeApiComponent} from './post-code-api.component';

@NgModule({
  declarations: [PostCodeApiComponent],
  exports: [PostCodeApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class PostCodeApiModule {}
