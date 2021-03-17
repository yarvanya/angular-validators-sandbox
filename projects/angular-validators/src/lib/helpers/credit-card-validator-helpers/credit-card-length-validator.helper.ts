import {IMCreditCardTypeValidatorEnum} from '../../enums/credit-card-type.enum';

export interface CreditCardLengthFromToInterface {
  from: number;
  to: number;
}

export const CreditCardValidatorResolver = {
  NumberLength: {
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
  },
  IINRange: {
    [IMCreditCardTypeValidatorEnum.Visa]: [4],
    [IMCreditCardTypeValidatorEnum.VisaElectron]: [4026, 417500, 4508, 4844, 4913, 4917],
    [IMCreditCardTypeValidatorEnum.AmericanExpress]: [34, 37],
    [IMCreditCardTypeValidatorEnum.ChinaUnionPay]: [62],
    [IMCreditCardTypeValidatorEnum.MasterCard]: [{from: 2221, to: 2720}, {from: 51, to: 55}],
    [IMCreditCardTypeValidatorEnum.Maestro]: [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763],
    [IMCreditCardTypeValidatorEnum.DinersClubCarteBlanche]: [],
    [IMCreditCardTypeValidatorEnum.DinersClubInternational]: [36],
    [IMCreditCardTypeValidatorEnum.DinersClubUnitedStatesAndCanada]: [54],
    [IMCreditCardTypeValidatorEnum.Discover]: [6011, {from: 622126, to: 622925}, 644, 645, 646, 647, 648, 649, 65],
    [IMCreditCardTypeValidatorEnum.JCB]: [{from: 3528, to: 3589}],
    [IMCreditCardTypeValidatorEnum.UATP]: [1],
    [IMCreditCardTypeValidatorEnum.Dankort]: [5019, 4571],
    [IMCreditCardTypeValidatorEnum.InterPayment]: [636]
  }
}
