import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IMCreditCardTypeValidatorEnum} from '../enums/credit-card-type.enum';
import {
  CreditCardLengthFromToInterface,
  CreditCardLengthValidatorResolver
} from '../helpers/credit-card-validator-helpers/credit-card-length-validator.helper';

export class IMCreditCardValidatorConfigModel {
  creditCardType?: IMCreditCardTypeValidatorEnum = IMCreditCardTypeValidatorEnum.MasterCard;
  // todo add numbers split (4-4-4-4 || 4-6-4)
}

export const IMCreditCardValidator = (config: IMCreditCardValidatorConfigModel = new IMCreditCardValidatorConfigModel()): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value?.length) {
      const creditCardNumberLength = control.value?.replace(/\s/g, '')?.length;
      const requiredCreditCardLength: number | CreditCardLengthFromToInterface = CreditCardLengthValidatorResolver[config.creditCardType];
      if (creditCardNumberLength < requiredCreditCardLength
      || creditCardNumberLength > requiredCreditCardLength
      || (creditCardNumberLength < (requiredCreditCardLength as CreditCardLengthFromToInterface).from
      || creditCardNumberLength > (requiredCreditCardLength as CreditCardLengthFromToInterface).to)) {
        // todo add check to type of number starts
        return {creditCardValidatorError: true};
      }
    }
  };
};
