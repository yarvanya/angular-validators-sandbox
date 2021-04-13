import {AbstractControl, ValidatorFn} from '@angular/forms';
import {IMCountryConfigurations} from '../constants/country-configurations.constant';
import {IMCountryConfigInterface} from '../interfaces/country-config.interface';
import {IMPhoneNumberErrorInterface} from '../interfaces/phone-number-error.interface';
import {IMCountryEnum} from '../enums/country.enum';

export const IMPhoneNumberValidator = (country: IMCountryEnum): ValidatorFn => {
  const config: IMCountryConfigInterface = IMCountryConfigurations.find(item => item.country === country);
  const regexp: RegExp = new RegExp(`^(?:${config.phoneNumber.callingCode})[0-9]{${config.phoneNumber.afterCodeNumbersLength}}$`);

  return (control: AbstractControl): {[key: string]: IMPhoneNumberErrorInterface} => {
    if (control.value && !regexp.test(control.value)) {
      return {
        phoneNumberError: {
          isInvalid: true,
          countryName: config.countryName
        }
      };
    }
  };
};
