import {IMPasswordOperatorEnum} from '../enums/password-operator.enum';

export interface IMPasswordErrorInterface {
  isInvalid: boolean;
  operator: IMPasswordOperatorEnum;
  comparingValue: number;
}
