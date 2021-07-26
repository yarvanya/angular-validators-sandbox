import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const IMEmailValidator = (scale: number = 3, fixed: boolean = false): ValidatorFn => {
  const scaling = fixed ? `${scale}` : `1,${scale}`;
  const regexp: RegExp = new RegExp(`^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z-]+\.[a-zA-Z]{${scaling}}$`);

  return (control: AbstractControl): ValidationErrors => {
    if (control.value && !regexp.test(control.value)) {
      return {isEmailInvalid: true};
    }
  };
};
