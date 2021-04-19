import {AbstractControl, ValidatorFn} from '@angular/forms';
import {IMNumberDecimalPlacesErrorInterface} from '../interfaces/number-decimal-places-error.interface';

export const IMNumberDecimalPlacesValidator = (scale: number = 0, fixed: boolean = false): ValidatorFn => {
  return (control: AbstractControl): {areDecimalPlacesInvalid: IMNumberDecimalPlacesErrorInterface} => {
    const scaling = fixed ? `${scale}` : `0,${scale}`;
    const regexp: RegExp = new RegExp(`^-?([0-9]*[.]?)?[0-9]{${scaling}}$`);

    if (control.value && !regexp.test(control.value)) {
      return {
        areDecimalPlacesInvalid: {
          isInvalid: true,
          scale,
          fixed
        } as IMNumberDecimalPlacesErrorInterface
      };
    }
  };
};
