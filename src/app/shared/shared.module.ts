import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ControlErrorResolverPipe} from '../pipes/control-error-resolver.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

export const CUSTOM_MAT_DATE_FORMATS = {
  parse: {
    dateInput: 'DD.MM.yyyy'
  },
  display: {
    dateInput: 'DD.MM.yyyy',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
  }
};

@NgModule({
  declarations: [ControlErrorResolverPipe],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ControlErrorResolverPipe,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_MAT_DATE_FORMATS}
  ]
})

export class SharedModule {}
