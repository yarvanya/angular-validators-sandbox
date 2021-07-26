import {AbstractControl, ValidatorFn} from '@angular/forms';
import {Moment} from 'moment';
import {IMDateInRangeErrorInterface} from '../interfaces/date-in-range-error.interface';
import {IMWorkingDateFormat} from '../constants/general.constant';

export const IMDateInRangeValidator = (from: Moment, to: Moment): ValidatorFn => {
  return (control: AbstractControl): {dateInRange: IMDateInRangeErrorInterface} => {
    const error: IMDateInRangeErrorInterface = {
      isInvalid: true,
      from: from?.format(IMWorkingDateFormat),
      to: to?.format(IMWorkingDateFormat)
    };

    if (from && to && control.value) {
      if (from.isAfter(control.value) || to.isBefore(control.value)) {
        return {dateInRange: error};
      }
    }
  };
};
