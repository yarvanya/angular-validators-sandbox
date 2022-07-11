import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMPasswordOperatorEnum} from '../enums/password-operator.enum';
import {IMPasswordErrorInterface} from '../interfaces/password-error.interface';

export class IMPasswordValidatorConfigModel {
  public minLength: number;
  public minNumberQuantity?: number;
  public minCapitalLettersQuantity?: number;
  public minSmallLettersQuantity?: number;
  public minSpecialCharactersQuantity?: number;
}

export const IMPasswordValidator = (config: IMPasswordValidatorConfigModel = new IMPasswordValidatorConfigModel()): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const operator = passwordValidatorErrorResolver(control.value, config);

      if (!!operator) {
        return {
          passwordValidatorError: {
            isInvalid: true,
            operator: IMPasswordOperatorEnum[operator],
            comparingValue: config[operator]
          } as IMPasswordErrorInterface
        };
      }
    }
  };
};

const passwordValidatorErrorResolver = (control_value: string, configs: IMPasswordValidatorConfigModel): string => {
  return Object.keys(configs).find(key => configs[key] && operatorCheckResolver[IMPasswordOperatorEnum[key]](control_value, configs[key]));
};

const operatorCheckResolver = {
  [IMPasswordOperatorEnum.minLength]: (value: string, required_password_length: number) =>
    value.length < required_password_length,
  [IMPasswordOperatorEnum.minNumberQuantity]: (value: string, required_numbers_quantity: number) =>
    (value.match(/[0-9]/g)?.length || 0) < required_numbers_quantity,
  [IMPasswordOperatorEnum.minCapitalLettersQuantity]: (value: string, required_cap_letters_quantity) =>
    (value.match(/[A-Z]/g)?.length || 0) < required_cap_letters_quantity,
  [IMPasswordOperatorEnum.minSmallLettersQuantity]: (value: string, required_small_letters_quantity) =>
    (value.match(/[a-z]/g)?.length || 0) < required_small_letters_quantity,
  [IMPasswordOperatorEnum.minSpecialCharactersQuantity]: (value: string, required_special_char_quantity) =>
    (value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)?.length || 0) < required_special_char_quantity
};
