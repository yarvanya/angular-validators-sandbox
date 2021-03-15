import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';

export interface IMNumberComparatorErrorInterface {
  isInvalid: boolean;
  operator: IMComparatorOperatorEnum;
  comparingValue: number;
}
