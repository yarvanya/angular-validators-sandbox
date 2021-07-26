import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';

export interface IMDateComparatorErrorInterface {
  isInvalid: boolean;
  operator: IMComparatorOperatorEnum;
  comparingValue: string;
}
