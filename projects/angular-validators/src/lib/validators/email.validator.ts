import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class IMEmailValidatorConfigModel {
  public scale = 3;
}

export const IMEmailValidator = (config: IMEmailValidatorConfigModel = new IMEmailValidatorConfigModel()): ValidatorFn => {
  const emailPattern: RegExp = /^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z-]+\.[a-zA-Z]{1,4}$/;

  return (control: AbstractControl): ValidationErrors => {
    if (control.value && !control.value.match(emailPattern)) {
      return {isEmailInvalid: true};
    }
  };
};
