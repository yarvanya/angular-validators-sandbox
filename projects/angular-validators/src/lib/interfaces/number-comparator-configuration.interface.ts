import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';

export interface IMNumberComparatorValidatorConfigInterface {
  comparingOperator: IMComparatorOperatorEnum;
  comparingValue?: number;
  comparingControlKey?: string;
}
