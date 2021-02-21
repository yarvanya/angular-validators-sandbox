import {IMPhoneNumberConfigurationInterface} from '../interfaces/phone-number/phone-number-configuration.interface';
import {IMCountryCodeEnum} from '../enums/country-code.enum';

// List of European countries by area: https://en.wikipedia.org/wiki/List_of_European_countries_by_area

export const IMPhoneNumberCountryConfigurations: IMPhoneNumberConfigurationInterface[] = [
  {
    country: 'Ukraine',
    code: IMCountryCodeEnum.ua,
    callingCode: 380,
    afterCodeNumbersLength: 9,
    example: 380971617271
  },
  {
    country: 'Russia',
    code: IMCountryCodeEnum.ru,
    callingCode: 7,
    afterCodeNumbersLength: 10,
    example: 79585122113
  },
  {
    country: 'France',
    code: IMCountryCodeEnum.fr,
    callingCode: 33,
    afterCodeNumbersLength: 9,
    example: 33564576787
  }
];
