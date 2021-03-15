import {IMCreditCardTypeValidatorEnum} from '../../enums/credit-card-type.enum';

export interface CreditCardLengthFromToInterface {
  from: number;
  to: number;
}

export const CreditCardLengthValidatorResolver: {[key: number]: number | CreditCardLengthFromToInterface} = {
  [IMCreditCardTypeValidatorEnum.Visa]: {from: 13, to: 19},
  [IMCreditCardTypeValidatorEnum.VisaElectron]: 16,
  [IMCreditCardTypeValidatorEnum.AmericanExpress]: 15,
  [IMCreditCardTypeValidatorEnum.ChinaUnionPay]: {from: 16, to: 19},
  [IMCreditCardTypeValidatorEnum.MasterCard]: 16,
  [IMCreditCardTypeValidatorEnum.Maestro]: {from: 12, to: 19},
  [IMCreditCardTypeValidatorEnum.DinersClubCarteBlanche]: 14,
  [IMCreditCardTypeValidatorEnum.DinersClubInternational]: 14,
  [IMCreditCardTypeValidatorEnum.DinersClubUnitedStatesAndCanada]: 16,
  [IMCreditCardTypeValidatorEnum.Discover]: 16,
  [IMCreditCardTypeValidatorEnum.JCB]: 16,
  [IMCreditCardTypeValidatorEnum.UATP]: 15,
  [IMCreditCardTypeValidatorEnum.Dankort]: 16,
  [IMCreditCardTypeValidatorEnum.InterPayment]: {from: 16, to: 19}
};
