import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorResolverService} from '../services/error-resolver.service';
import {HomeComponent} from './home/home.component';
import {CustomRequiredValidatorComponent} from './custom-required-validator/custom-required-validator.component';
import {AppRoutingModule} from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PhoneNumberValidatorComponent} from './phone-number-validator/phone-number-validator.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PhoneNumberOverviewComponent} from './phone-number-validator/phone-number-overview/phone-number-overview.component';
import {PhoneNumberApiComponent} from './phone-number-validator/phone-number-api/phone-number-api.component';
import {PhoneNumberExamplesComponent} from './phone-number-validator/phone-number-examples/phone-number-examples.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CustomRequiredOverviewComponent} from './custom-required-validator/custom-required-overview/custom-required-overview.component';
import {CustomRequiredApiComponent} from './custom-required-validator/custom-required-api/custom-required-api.component';
import {CustomRequiredExamplesComponent} from './custom-required-validator/custom-required-examples/custom-required-examples.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {CustomEmailValidatorComponent} from './custom-email-validator/custom-email-validator.component';
import {CustomEmailOverviewComponent} from './custom-email-validator/custom-email-overview/custom-email-overview.component';
import {CustomEmailApiComponent} from './custom-email-validator/custom-email-api/custom-email-api.component';
import {CustomEmailExamplesComponent} from './custom-email-validator/custom-email-examples/custom-email-examples.component';

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
    CustomEmailExamplesComponent
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
    MatSelectModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ErrorResolverService
  ]
})

export class AppModule {}
