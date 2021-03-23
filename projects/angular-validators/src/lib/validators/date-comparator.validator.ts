import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';
import {IMDateComparatorValidatorConfigInterface} from '../interfaces/date-comparator-configuration.interface';
import {IMDateComparatorErrorInterface} from '../interfaces/date-comparator-error.interface';
import {Moment} from 'moment';

const workingDateFormat = 'DD.MM.YYYY';

export const IMDateComparatorValidator = (config: IMDateComparatorValidatorConfigInterface): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (config.comparingControlKey) {
      const comparingValue = control?.parent?.get(config.comparingControlKey)?.value;
      return getDateComparatorValidationError(control.value, comparingValue, config.comparingOperator);
    } else {
      return getDateComparatorValidationError(control.value, config.comparingValue, config.comparingOperator);
    }
  };
};

const getDateComparatorValidationError =
  (control_value: Moment, comparing_control_value: Moment, operator: IMComparatorOperatorEnum): ValidationErrors => {
    if (control_value && comparing_control_value) {
      if (operatorCheckResolver[operator](control_value, comparing_control_value)) {
        return {
          dateComparatorError: {
            isInvalid: true,
            operator,
            comparingValue: comparing_control_value.format(workingDateFormat)
          } as IMDateComparatorErrorInterface
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
