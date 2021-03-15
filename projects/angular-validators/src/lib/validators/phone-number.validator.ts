import {AbstractControl, ValidatorFn} from '@angular/forms';
import {IMPhoneNumberCountryConfigurations} from '../constants/phone-number-country-configurations.constant';
import {IMPhoneNumberConfigurationInterface} from '../interfaces/phone-number-configuration.interface';
import {IMPhoneNumberErrorInterface} from '../interfaces/phone-number-error.interface';
import {IMCountryCodeEnum} from '../enums/country-code.enum';

export const IMPhoneNumberValidator = (country_code: IMCountryCodeEnum = IMCountryCodeEnum.ua): ValidatorFn => {
  const config: IMPhoneNumberConfigurationInterface = IMPhoneNumberCountryConfigurations.find(item => item.code === country_code);
  const regexp: RegExp = new RegExp(`^(?:${config.callingCode})[0-9]{${config.afterCodeNumbersLength}}$`);

  return (control: AbstractControl): {[key: string]: IMPhoneNumberErrorInterface} => {
    if (control.value && !regexp.test(control.value)) {
      return {
        phoneNumberError: {
          isInvalid: true,
          countryName: config.country
        }
      };
    }
  };
};
