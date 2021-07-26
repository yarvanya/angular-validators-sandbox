import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';
import {IMTimeComparatorValidatorConfigInterface} from '../interfaces/time-comparator-configuration.interface';
import {Moment} from 'moment';
import * as moment from 'moment';
import {IMTimeComparatorErrorInterface} from '../interfaces/time-comparator-error.interface';

export const IMTimeComparatorValidator = (config: IMTimeComparatorValidatorConfigInterface): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (config.comparingControlKey) {
      const comparingValue = control?.parent?.get(config.comparingControlKey)?.value;
      return getTimeComparatorValidationError(control.value, comparingValue, config.comparingOperator);
    } else {
      return getTimeComparatorValidationError(control.value, config.comparingValue, config.comparingOperator);
    }
  };
};

const getTimeComparatorValidationError =
  (control_value: string, comparing_control_value: string, operator: IMComparatorOperatorEnum): ValidationErrors => {
    if (control_value && comparing_control_value) {
      const timeFormatControlValue = moment(control_value, 'HH:mm');
      const timeFormatComparingControlValue = moment(comparing_control_value, 'HH:mm');

      if (operatorCheckResolver[operator](timeFormatControlValue, timeFormatComparingControlValue)) {
        return {
          timeComparatorError: {
            isInvalid: true,
            operator,
            comparingValue: comparing_control_value
          } as IMTimeComparatorErrorInterface
        };
      }
    }
  };

const operatorCheckResolver = {
  [IMComparatorOperatorEnum.equal]: (value: Moment, comparing_value: Moment) => {
    return !value.isSame(comparing_value);
  },
  [IMComparatorOperatorEnum.greater]: (value: Moment, comparing_value: Moment) => {
    return !value.isAfter(comparing_value);
  },
  [IMComparatorOperatorEnum.greaterEqual]: (value: Moment, comparing_value: Moment) => {
    return !value.isSame(comparing_value) && !value.isAfter(comparing_value);
  },
  [IMComparatorOperatorEnum.less]: (value: Moment, comparing_value: Moment) => {
    return !value.isBefore(comparing_value);
  },
  [IMComparatorOperatorEnum.lessEqual]: (value: Moment, comparing_value: Moment) => {
    return !value.isSame(comparing_value) && !value.isBefore(comparing_value);
  }
};
