import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMCreditCardTypeValidatorEnum} from '../enums/credit-card-type.enum';
import {
  CreditCardLengthFromToInterface,
  CreditCardValidatorResolver
} from '../helpers/credit-card-validator-helpers/credit-card-length-validator.helper';
import {IMCreditCardErrorInterface} from '../interfaces/credit-card-error.interface';

export class IMCreditCardValidatorConfigModel {
  creditCardType: IMCreditCardTypeValidatorEnum = IMCreditCardTypeValidatorEnum.MasterCard;
}

export const IMCreditCardValidator = (config: IMCreditCardValidatorConfigModel = new IMCreditCardValidatorConfigModel()): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const creditCardNumber = control.value?.replace(/\s/g, '');

    if (creditCardNumber?.length) {
      const creditCardNumberLength = creditCardNumber.length;
      const requiredCreditCardLength: number | CreditCardLengthFromToInterface =
        CreditCardValidatorResolver.NumberLength[config.creditCardType];

      const isNumberInINNRange = (): boolean => CreditCardValidatorResolver.IINRange[config.creditCardType].some(
        (IINRange: number | CreditCardLengthFromToInterface) => {
          for (let i = (IINRange as CreditCardLengthFromToInterface).from; i <= (IINRange as CreditCardLengthFromToInterface).to; i++) {
            if (new RegExp('^' + i, 'i').test(creditCardNumber)) {
              return true;
            }
          }
          return new RegExp('^' + IINRange, 'i').test(creditCardNumber);
        }
      );

      const isNumberFitToLength = (): boolean => creditCardNumberLength < requiredCreditCardLength
        || creditCardNumberLength > requiredCreditCardLength
        || (creditCardNumberLength < (requiredCreditCardLength as CreditCardLengthFromToInterface).from
        || creditCardNumberLength > (requiredCreditCardLength as CreditCardLengthFromToInterface).to);

      const isLuhnCheckPassed = (): boolean => {
        const arr = (creditCardNumber + '').split('').reverse().map(x => Number(x));
        const lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        return sum % 10 === 0;
      };

      if (!isNumberInINNRange()) {
        return {creditCardTypeValidationError: true} as IMCreditCardErrorInterface;
      } else {
        if (isNumberFitToLength()) {
          return {creditCardNumberLengthValidatorError: true} as IMCreditCardErrorInterface;
        } else if (!isLuhnCheckPassed()) {
          return {creditCardDoesNotExist: true} as IMCreditCardErrorInterface;
        }
      }
    }
  };
};
