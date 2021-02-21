import {IMCountryCodeEnum} from '../../enums/country-code.enum';

export interface IMPhoneNumberConfigurationInterface {
  country: string;
  code: IMCountryCodeEnum;
  callingCode: number;
  afterCodeNumbersLength: number;
  example: number;
}
