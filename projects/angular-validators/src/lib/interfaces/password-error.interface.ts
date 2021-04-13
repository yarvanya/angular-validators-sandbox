import {PasswordOperatorEnum} from '../enums/password-operator.enum';

export interface PasswordErrorInterface {
  isInvalid: boolean;
  operator: PasswordOperatorEnum;
  comparingValue: number;
}
