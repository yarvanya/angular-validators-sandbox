import {IMCountryEnum} from '../enums/country.enum';

export interface IMCountryConfigInterface {
  country: IMCountryEnum;
  countryName: string;
  iso: string;
  capital: string;
  phoneNumber: IMCountryPhoneNumberConfigInterface;
  postCodePattern: string;
  postCodeExample: number | string;
}

export interface IMCountryPhoneNumberConfigInterface {
  callingCode: number;
  afterCodeNumbersLength: number;
  example: number;
}
