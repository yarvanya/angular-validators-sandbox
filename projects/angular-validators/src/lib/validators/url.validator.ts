import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMUrlProtocolTypeEnum} from '../enums/url-protocol.enum';
import {IMUrlErrorInterface} from '../interfaces/url-error.interface';

export class IMUrlValidatorConfigModel {
  public protocolType: IMUrlProtocolTypeEnum = IMUrlProtocolTypeEnum.Any;
}

export const IMUrlValidator = (config: IMUrlValidatorConfigModel = new IMUrlValidatorConfigModel()): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value && !urlCheckResolver[config.protocolType](control.value)) {
      return {
        urlValidationError: {
          isInvalid: true,
          protocolType: config.protocolType
        } as IMUrlErrorInterface
      };
    }
  };
};

const urlCheckResolver = {
  [IMUrlProtocolTypeEnum.Any]: (value: string) =>
    new RegExp(`^(?:(?:http(s)?:\\/\\/)|(?:ftp(s)?:\\/\\/))?[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=]+$`).test(value),
  [IMUrlProtocolTypeEnum.NoProtocol]: (value: string) => new RegExp(`^www.`).test(value),
  [IMUrlProtocolTypeEnum.Http]: (value: string) => new RegExp(`^http://`).test(value),
  [IMUrlProtocolTypeEnum.Https]: (value: string) => new RegExp(`^https://`).test(value),
  [IMUrlProtocolTypeEnum.Ftp]: (value: string) => new RegExp(`^ftp://`).test(value)
};
