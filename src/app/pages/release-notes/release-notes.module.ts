import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {ReleaseNotesComponent} from './release-notes.component';

const routes: Routes = [
  {
    path: '',
    component: ReleaseNotesComponent
  }
];

@NgModule({
  declarations: [ReleaseNotesComponent],
  exports: [ReleaseNotesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class ReleaseNotesModule {}
