import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CustomRequiredValidatorComponent} from './custom-required-validator/custom-required-validator.component';
import {PhoneNumberValidatorComponent} from './phone-number-validator/phone-number-validator.component';
import {PhoneNumberOverviewComponent} from './phone-number-validator/phone-number-overview/phone-number-overview.component';
import {PhoneNumberApiComponent} from './phone-number-validator/phone-number-api/phone-number-api.component';
import {PhoneNumberExamplesComponent} from './phone-number-validator/phone-number-examples/phone-number-examples.component';
import {CustomRequiredOverviewComponent} from './custom-required-validator/custom-required-overview/custom-required-overview.component';
import {CustomRequiredApiComponent} from './custom-required-validator/custom-required-api/custom-required-api.component';
import {CustomRequiredExamplesComponent} from './custom-required-validator/custom-required-examples/custom-required-examples.component';
import {CustomEmailValidatorComponent} from './custom-email-validator/custom-email-validator.component';
import {CustomEmailOverviewComponent} from './custom-email-validator/custom-email-overview/custom-email-overview.component';
import {CustomEmailApiComponent} from './custom-email-validator/custom-email-api/custom-email-api.component';
import {CustomEmailExamplesComponent} from './custom-email-validator/custom-email-examples/custom-email-examples.component';
import {NumberComparatorValidatorComponent} from './number-comparator-validator/number-comparator-validator.component';
import {NumberComparatorOverviewComponent} from './number-comparator-validator/number-comparator-overview/number-comparator-overview.component';
import {NumberComparatorApiComponent} from './number-comparator-validator/number-comparator-api/number-comparator-api.component';
import {NumberComparatorExamplesComponent} from './number-comparator-validator/number-comparator-examples/number-comparator-examples.component';
import {CustomCreditCardApiComponent} from './custom-credit-card-validator/custom-credit-card-api/custom-credit-card-api.component';
import {CustomCreditCardExamplesComponent} from './custom-credit-card-validator/custom-credit-card-examples/custom-credit-card-examples.component';
import {CustomCreditCardOverviewComponent} from './custom-credit-card-validator/custom-credit-card-overview/custom-credit-card-overview.component';
import {CustomCreditCardValidatorComponent} from './custom-credit-card-validator/custom-credit-card-validator.component';

// Services
import {ErrorResolverService} from '../services/error-resolver.service';
import { DateComparatorValidatorComponent } from './date-comparator-validator/date-comparator-validator.component';
import { DateComparatorOverviewComponent } from './date-comparator-validator/date-comparator-overview/date-comparator-overview.component';
import { DateComparatorApiComponent } from './date-comparator-validator/date-comparator-api/date-comparator-api.component';
import { DateComparatorExamplesComponent } from './date-comparator-validator/date-comparator-examples/date-comparator-examples.component';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';

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
  declarations: [
    AppComponent,
    HomeComponent,
    CustomRequiredValidatorComponent,
    PhoneNumberValidatorComponent,
    PhoneNumberOverviewComponent,
    PhoneNumberApiComponent,
    PhoneNumberExamplesComponent,
    CustomRequiredOverviewComponent,
    CustomRequiredApiComponent,
    CustomRequiredExamplesComponent,
    CustomEmailValidatorComponent,
    CustomEmailOverviewComponent,
    CustomEmailApiComponent,
    CustomEmailExamplesComponent,
    NumberComparatorValidatorComponent,
    NumberComparatorOverviewComponent,
    NumberComparatorApiComponent,
    NumberComparatorExamplesComponent,
    CustomCreditCardValidatorComponent,
    CustomCreditCardApiComponent,
    CustomCreditCardExamplesComponent,
    CustomCreditCardOverviewComponent,
    DateComparatorValidatorComponent,
    DateComparatorOverviewComponent,
    DateComparatorApiComponent,
    DateComparatorExamplesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ErrorResolverService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_MAT_DATE_FORMATS}
  ]
})

export class AppModule {}
