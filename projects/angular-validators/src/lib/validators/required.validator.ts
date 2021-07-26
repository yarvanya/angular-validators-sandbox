import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMRequiredErrorInterface} from '../interfaces/required-error.interface';

export class IMRequiredValidatorConfigModel {
  public isTrimValueRequired?: boolean;
  public isZeroAllowed?: boolean;
  public isCheckboxShouldBeChecked?: boolean;
}

export const IMRequiredValidator = (config: IMRequiredValidatorConfigModel = new IMRequiredValidatorConfigModel()): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value || control.value === 0 || control.value === false) {
      switch (typeof control.value) {
        case 'string':
          return config.isTrimValueRequired ? control.value.trim() ? null : {fieldRequiredError: true} : null;
        case 'number':
          return control.value === 0 && !config.isZeroAllowed ? {fieldRequiredError: true} : null;
        case 'boolean':
          return control.value === false && config.isCheckboxShouldBeChecked ? {fieldRequiredError: true} : null;
        default: return null;
      }
    } else {
      return {fieldRequiredError: true} as IMRequiredErrorInterface;
    }
  };
};
