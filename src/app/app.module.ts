import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from '@shared';
import {HomeModule} from './home/home.module';
import {CustomPasswordValidatorModule} from './custom-password-validator/custom-password-validator.module';
import {CustomRequiredValidatorModule} from './custom-required-validator/custom-required-validator.module';
import {PhoneNumberValidatorModule} from './phone-number-validator/phone-number-validator.module';
import {NumberComparatorValidatorModule} from './number-comparator-validator/number-comparator-validator.module';
import {CustomEmailValidatorModule} from './custom-email-validator/custom-email-validator.module';
import {CustomCreditCardValidatorModule} from './custom-credit-card-validator/custom-credit-card-validator.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    CustomPasswordValidatorModule,
    CustomRequiredValidatorModule,
    PhoneNumberValidatorModule,
    CustomEmailValidatorModule,
    NumberComparatorValidatorModule,
    CustomCreditCardValidatorModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
