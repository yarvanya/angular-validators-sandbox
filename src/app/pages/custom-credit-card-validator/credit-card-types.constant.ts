import {IMCreditCardTypeValidatorEnum, CreditCardValidatorResolver} from 'angular-validators';

export const CreditCardTypes = Object.keys(IMCreditCardTypeValidatorEnum)
  .filter(key => isNaN(Number(key)))
  .map(key => (
    {
      label: key,
      type: `IMCreditCardTypeValidatorEnum.${key}`,
      numbersQuantity: CreditCardValidatorResolver.NumberLength[IMCreditCardTypeValidatorEnum[key]]?.from
        ? `${CreditCardValidatorResolver.NumberLength[IMCreditCardTypeValidatorEnum[key]].from} - ${CreditCardValidatorResolver.NumberLength[IMCreditCardTypeValidatorEnum[key]].to}`
        : CreditCardValidatorResolver.NumberLength[IMCreditCardTypeValidatorEnum[key]],
      cardOrigin: CreditCardValidatorResolver.IINRange[IMCreditCardTypeValidatorEnum[key]].map(range => range?.from ? `${range.from} - ${range.to}` : range).join(', ')
    }
  ));
