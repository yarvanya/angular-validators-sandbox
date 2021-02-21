import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class IMEmailValidatorConfigModel {
  public scale = 3;
}

export const IMEmailValidator = (config: IMEmailValidatorConfigModel = new IMEmailValidatorConfigModel()): ValidatorFn => {
  const regexp: RegExp = new RegExp(`^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z-]+\.[a-zA-Z]{1,${config.scale}}$`);

  return (control: AbstractControl): ValidationErrors => {
    if (control.value && !regexp.test(control.value)) {
      return {isEmailInvalid: true};
    }
  };
};
