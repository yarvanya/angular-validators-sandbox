import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';

export interface IMTimeComparatorErrorInterface {
  isInvalid: boolean;
  operator: IMComparatorOperatorEnum;
  comparingValue: string;
}
