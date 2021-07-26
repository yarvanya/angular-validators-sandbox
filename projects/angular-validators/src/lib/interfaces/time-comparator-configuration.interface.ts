import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';

export interface IMTimeComparatorValidatorConfigInterface {
  comparingOperator: IMComparatorOperatorEnum;
  comparingValue?: string;
  comparingControlKey?: string;
}
