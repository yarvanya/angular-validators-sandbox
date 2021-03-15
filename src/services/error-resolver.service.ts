import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {IMPhoneNumberErrorInterface} from 'angular-validators';

@Injectable()

export class ErrorResolverService {
  private errorResolver = {
    isEmailInvalid: () => 'Email is not valid',
    phoneNumberError: (error: IMPhoneNumberErrorInterface) => `Phone number is not valid (${error.countryName}).`,
    fieldRequiredError: () => 'This field is required.',
    creditCardNumberLengthValidatorError: () => 'Invalid credit card number',
    creditCardTypeValidationError: () => 'Your credit card type is invalid',
    creditCardInvalid: () => 'Sorry, but such card does not exist'
  };

  public getErrorMessage(control: AbstractControl): string {
    if (control.invalid) {
      const errorKeys = Object.keys(control.errors);

      if (this.errorResolver[errorKeys[0]]) {
        return this.errorResolver[errorKeys[0]](control.errors[errorKeys[0]]);
      }
    }
  }
}
