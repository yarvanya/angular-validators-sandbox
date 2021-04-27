import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from '@shared';
import {HomeModule} from './pages/home/home.module';
import {CustomPasswordValidatorModule} from './pages/custom-password-validator/custom-password-validator.module';
import {CustomRequiredValidatorModule} from './pages/custom-required-validator/custom-required-validator.module';
import {PhoneNumberValidatorModule} from './pages/phone-number-validator/phone-number-validator.module';
import {NumberComparatorValidatorModule} from './pages/number-comparator-validator/number-comparator-validator.module';
import {CustomEmailValidatorModule} from './pages/custom-email-validator/custom-email-validator.module';
import {CustomCreditCardValidatorModule} from './pages/custom-credit-card-validator/custom-credit-card-validator.module';
import {AppComponent} from './app.component';
import {UrlValidatorModule} from './pages/url-validator/url-validator.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    CustomPasswordValidatorModule,
    CustomRequiredValidatorModule,
    PhoneNumberValidatorModule,
    CustomEmailValidatorModule,
    NumberComparatorValidatorModule,
    CustomCreditCardValidatorModule,
    UrlValidatorModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
