import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const IMJSONValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value && !isJSON(control.value)) {
      return {isJSONInvalid: true};
    }
  };
};

const isJSON = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
