import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMRequiredErrorInterface} from '../interfaces/required-error.interface';

export class IMRequiredValidatorConfigModel {
  public isTrimValueRequired?: boolean;
  public isZeroAllowed?: boolean;
}

export const IMRequiredValidator = (config: IMRequiredValidatorConfigModel = new IMRequiredValidatorConfigModel()): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value || control.value === 0) {
      switch (typeof control.value) {
        case 'string':
          return config.isTrimValueRequired
            ? control.value.trim() ? null : {fieldRequiredError: true} as IMRequiredErrorInterface : null;
        case 'number':
          return config.isZeroAllowed ? null : {fieldRequiredError: true} as IMRequiredErrorInterface;
        default: return null;
      }
    } else {
      return {fieldRequiredError: true} as IMRequiredErrorInterface;
    }
  };
};
