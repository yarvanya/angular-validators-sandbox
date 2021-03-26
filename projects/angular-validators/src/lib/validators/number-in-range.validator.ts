import {AbstractControl, ValidatorFn} from '@angular/forms';
import {isNumber} from '../helpers/is-number.helper';
import {IMNumberInRangeErrorInterface} from '../interfaces/number-in-range-error.interface';

export const IMNumberInRangeValidator = (from: number, to: number): ValidatorFn => {
  return (control: AbstractControl): {numberInRange: IMNumberInRangeErrorInterface} => {
    const error: IMNumberInRangeErrorInterface = {isInvalid: true, from, to};

    if (isNumber(from) && isNumber(to) && isNumber(control.value)) {
      if (from > control.value || to < control.value) {
        return {numberInRange: error};
      }
    }
  };
};
