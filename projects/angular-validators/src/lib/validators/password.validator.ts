import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {PasswordOperatorEnum} from '../enums/password-operator.enum';
import {PasswordErrorInterface} from '../interfaces/password-error.interface';

export class IMPasswordValidatorConfigModel {
  public minLength?: number = 6;
  public minNumberQuantity?: number;
}

export const IMPasswordValidator = (config: IMPasswordValidatorConfigModel = new IMPasswordValidatorConfigModel()): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const operator = passwordValidatorErrorResolver(control.value, config);
      if (!!operator) {
        return {
          passwordValidatorError: {
            isInvalid: true,
            operator: PasswordOperatorEnum[operator]
          } as PasswordErrorInterface
        };
      }
    }
  };
};

const passwordValidatorErrorResolver = (control_value: string, configs: IMPasswordValidatorConfigModel): string => {
  return Object.keys(configs).find(key => configs[key] && operatorCheckResolver[PasswordOperatorEnum[key]](control_value, configs[key]));
};

const operatorCheckResolver = {
  [PasswordOperatorEnum.minLength]:
    (value: string, required_password_length: number) => value.length < required_password_length,
  [PasswordOperatorEnum.minNumberQuantity]:
    (value: string, required_numbers_quantity: number) => {
      console.log(value.replaceAll(/\D/g, '').length);
      return required_numbers_quantity > value.replaceAll(/\D/g, '').length;
    },
};
