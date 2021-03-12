import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {isNumber} from '../helpers/is-number.helper';
import {IMGreaterThanNumberErrorInterface} from '../interfaces/greater-than-number-error.interface';
import {IMGreaterThanNumberValidatorConfigInterface} from '../interfaces/greater-than-number-configuration.interface';

export const IMGreaterThanNumberValidator = (config: IMGreaterThanNumberValidatorConfigInterface): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (config.comparingControlKey) {
      const comparingValue = control?.parent?.get(config.comparingControlKey)?.value;
      return getGreaterThanNumberValidationError(control.value, comparingValue);
    } else {
      return getGreaterThanNumberValidationError(control.value, config.comparingValue);
    }
  };
};

const getGreaterThanNumberValidationError = (control_value: number, comparing_control_value: number): ValidationErrors => {
  if (isNumber(control_value) && isNumber(comparing_control_value) && control_value <= comparing_control_value) {
    return {
      greaterThanNumberError: {
        isInvalid: true,
        greaterThanValue: comparing_control_value
      } as IMGreaterThanNumberErrorInterface
    };
  }
};
