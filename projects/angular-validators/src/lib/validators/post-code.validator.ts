import {AbstractControl, ValidatorFn} from '@angular/forms';
import {IMCountryConfigurations} from '../constants/country-configurations.constant';
import {IMCountryConfigInterface} from '../interfaces/country-config.interface';
import {IMPostCodeErrorInterface} from '../interfaces/post-code-error.interface';
import {IMCountryEnum} from '../enums/country.enum';

export const IMPostCodeValidator = (country: IMCountryEnum): ValidatorFn => {
  const config: IMCountryConfigInterface = IMCountryConfigurations.find(item => item.country === country);
  const regexp: RegExp = new RegExp(config.postCodePattern);

  return (control: AbstractControl): {postCodeError: IMPostCodeErrorInterface} => {
    if (control.value && !regexp.test(control.value)) {
      return {
        postCodeError: {
          isInvalid: true,
          countryName: config.countryName
        }
      };
    }
  };
};
