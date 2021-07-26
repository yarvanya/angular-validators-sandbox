import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {isNumber} from '../helpers/is-number.helper';
import {IMComparatorOperatorEnum} from '../enums/comparator-operator.enum';
import {IMNumberComparatorValidatorConfigInterface} from '../interfaces/number-comparator-configuration.interface';
import {IMNumberComparatorErrorInterface} from '../interfaces/number-comparator-error.interface';

export const IMNumberComparatorValidator = (config: IMNumberComparatorValidatorConfigInterface): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (config.comparingControlKey) {
      const comparingValue = control?.parent?.get(config.comparingControlKey)?.value;
      return getNumberComparatorValidationError(control.value, comparingValue, config.comparingOperator);
    } else {
      return getNumberComparatorValidationError(control.value, config.comparingValue, config.comparingOperator);
    }
  };
};

const getNumberComparatorValidationError =
  (control_value: number, comparing_control_value: number, operator: IMComparatorOperatorEnum): ValidationErrors => {
    if (isNumber(control_value) && isNumber(comparing_control_value) &&
      operatorCheckResolver[operator](control_value, comparing_control_value)) {
        return {
          numberComparatorError: {
            isInvalid: true,
            operator,
            comparingValue: comparing_control_value
          } as IMNumberComparatorErrorInterface
        };
    }
};

const operatorCheckResolver = {
  [IMComparatorOperatorEnum.equal]: (value: number, comparing_value: number) => value !== comparing_value,
  [IMComparatorOperatorEnum.greater]: (value: number, comparing_value: number) => value <= comparing_value,
  [IMComparatorOperatorEnum.greaterEqual]: (value: number, comparing_value: number) => value < comparing_value,
  [IMComparatorOperatorEnum.less]: (value: number, comparing_value: number) => value >= comparing_value,
  [IMComparatorOperatorEnum.lessEqual]: (value: number, comparing_value: number) => value > comparing_value
};
