import {AbstractControl, ValidationErrors} from '@angular/forms';

export const IMUUIdValidator = () => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value || control.value === 0) {
      if (typeof control.value === 'string') {
        return new RegExp(/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i)
          .test(control.value) ? null : {isUUIdInvalid: true};
      } else {
        return {isUUIdInvalid: true};
      }
    }
  };
};
