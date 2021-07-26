import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {PostCodeExamplesComponent} from './post-code-examples.component';

@NgModule({
  declarations: [PostCodeExamplesComponent],
  exports: [PostCodeExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class PostCodeExamplesModule {}
