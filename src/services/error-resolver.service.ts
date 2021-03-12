import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {IMPhoneNumberErrorInterface} from 'angular-validators';
import {IMGreaterThanNumberErrorInterface} from 'angular-validators';

@Injectable()

export class ErrorResolverService {
  private errorResolver = {
    isEmailInvalid: () => 'Email is not valid',
    phoneNumberError: (error: IMPhoneNumberErrorInterface) => `Phone number is not valid (${error.countryName}).`,
    greaterThanNumberError: (error: IMGreaterThanNumberErrorInterface) => `Value must be greater than ${error.greaterThanValue}.`,
    fieldRequiredError: () => 'This field is required.'
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
