import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {IMComparatorOperatorEnum, IMPhoneNumberErrorInterface, IMNumberComparatorErrorInterface} from 'angular-validators';

@Injectable({providedIn: 'root'})

export class ErrorResolverService {
  private errorResolver = {
    isEmailInvalid: () => 'Email is not valid',
    phoneNumberError: (error: IMPhoneNumberErrorInterface) => `Phone number is not valid (${error.countryName}).`,
    numberComparatorError: (error: IMNumberComparatorErrorInterface) => {
      switch (error.operator) {
        case IMComparatorOperatorEnum.equal: return `Must be equal to ${error.comparingValue}`;
        case IMComparatorOperatorEnum.greater: return `Must be greater than ${error.comparingValue}`;
        case IMComparatorOperatorEnum.greaterEqual: return `Must be greater than or equal to ${error.comparingValue}`;
        case IMComparatorOperatorEnum.less: return `Must be less than ${error.comparingValue}`;
        case IMComparatorOperatorEnum.lessEqual: return `Must be less than or equal to ${error.comparingValue}`;
      }
    },
    fieldRequiredError: () => 'This field is required.',
    required: () => 'This field is required.',
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
