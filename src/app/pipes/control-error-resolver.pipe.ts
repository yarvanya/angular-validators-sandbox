import {Pipe, PipeTransform} from '@angular/core';
import {
  IMDateComparatorErrorInterface,
  IMDateInRangeErrorInterface,
  IMNumberComparatorErrorInterface,
  IMNumberDecimalPlacesErrorInterface,
  IMNumberInRangeErrorInterface,
  IMPhoneNumberErrorInterface,
  IMPostCodeErrorInterface,
  IMUrlErrorInterface,
  IMPasswordErrorInterface,
  IMComparatorOperatorEnum,
  IMUrlProtocolTypeEnum,
  IMPasswordOperatorEnum
} from 'angular-validators';
import {ValidationErrors} from '@angular/forms';

@Pipe({name: 'controlErrorResolver'})

export class ControlErrorResolverPipe implements PipeTransform {
  private errorResolver = {
    isEmailInvalid: () => 'Email is not valid',
    phoneNumberError: (error: IMPhoneNumberErrorInterface) => `Phone number is not valid (${error.countryName}).`,
    numberComparatorError: (error: IMNumberComparatorErrorInterface) => {
      switch (error.operator) {
        case IMComparatorOperatorEnum.equal:
          return `Must be equal to ${error.comparingValue}`;
        case IMComparatorOperatorEnum.greater:
          return `Must be greater than ${error.comparingValue}`;
        case IMComparatorOperatorEnum.greaterEqual:
          return `Must be greater than or equal to ${error.comparingValue}`;
        case IMComparatorOperatorEnum.less:
          return `Must be less than ${error.comparingValue}`;
        case IMComparatorOperatorEnum.lessEqual:
          return `Must be less than or equal to ${error.comparingValue}`;
      }
    },
    dateComparatorError: (error: IMDateComparatorErrorInterface) => {
      switch (error.operator) {
        case IMComparatorOperatorEnum.equal:
          return `Must be equal to ${error.comparingValue}`;
        case IMComparatorOperatorEnum.greater:
          return `Must be greater than ${error.comparingValue}`;
        case IMComparatorOperatorEnum.greaterEqual:
          return `Must be greater than or equal to ${error.comparingValue}`;
        case IMComparatorOperatorEnum.less:
          return `Must be less than ${error.comparingValue}`;
        case IMComparatorOperatorEnum.lessEqual:
          return `Must be less than or equal to ${error.comparingValue}`;
      }
    },
    fieldRequiredError: () => 'This field is required.',
    required: () => 'This field is required.',
    creditCardNumberLengthValidatorError: () => 'Invalid credit card number',
    creditCardTypeValidationError: () => 'Your credit card type is invalid',
    creditCardDoesNotExist: () => 'Sorry, but such card does not exist',
    numberInRange: (error: IMNumberInRangeErrorInterface) => `Must be in range: from ${error.from} to ${error.to}`,
    dateInRange: (error: IMDateInRangeErrorInterface) => `Must be in range: from ${error.from} to ${error.to}`,
    postCodeError: (error: IMPostCodeErrorInterface) => `Post code is not valid (${error.countryName}).`,
    passwordValidatorError: (error: IMPasswordErrorInterface) => {
      switch (error.operator) {
        case IMPasswordOperatorEnum.minLength:
          return `Password should be more than ${error.comparingValue} symbols`;
        case IMPasswordOperatorEnum.minNumberQuantity:
          return `In password should be at least ${error.comparingValue} number(s)`;
        case IMPasswordOperatorEnum.minCapitalLettersQuantity:
          return `In password should be at least ${error.comparingValue} capital letter(s)`;
        case IMPasswordOperatorEnum.minSmallLettersQuantity:
          return `In password should be at least ${error.comparingValue} small letter(s)`;
        case IMPasswordOperatorEnum.minSpecialCharactersQuantity:
          return `In password should be at least ${error.comparingValue} special character(s)`;
      }
    },
    areDecimalPlacesInvalid: (error: IMNumberDecimalPlacesErrorInterface) => {
      if (error.fixed) {
        return `Must have ${error.scale} decimal places after comma.`;
      } else {
        return `Maximum ${error.scale} decimal place(s) after comma allowed.`;
      }
    },
    urlValidationError: (error: IMUrlErrorInterface) => {
      switch (error.protocolType) {
        case IMUrlProtocolTypeEnum.Any: return `Invalid link`;
        case IMUrlProtocolTypeEnum.NoProtocol: return `Link should start with 'www.'`;
        case IMUrlProtocolTypeEnum.Http: return `Link should start with 'http://'`;
        case IMUrlProtocolTypeEnum.Https: return `Link should start with 'https://'`;
        case IMUrlProtocolTypeEnum.Ftp: return `Link should start with 'ftp://'`;
      }
    },
    isJSONInvalid: () => 'JSON is not valid.'
  };

  public transform(error_keys: ValidationErrors): string {
    const validator_error = Object.keys(error_keys)[0];

    if (this.errorResolver[validator_error]) {
      return this.errorResolver[validator_error](error_keys[validator_error]);
    }
  }
}
