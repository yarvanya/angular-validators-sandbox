import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';
import {Moment} from 'moment';

export interface IMDateComparatorValidatorConfigInterface {
  comparingOperator: IMComparatorOperatorEnum;
  comparingValue?: Moment;
  comparingControlKey?: string;
}
