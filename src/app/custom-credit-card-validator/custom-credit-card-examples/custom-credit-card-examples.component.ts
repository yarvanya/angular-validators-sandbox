import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMCreditCardValidator, IMCreditCardTypeValidatorEnum} from 'angular-validators';
import {ErrorResolverService} from '@services/error-resolver.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custom-credit-card-examples',
  templateUrl: './custom-credit-card-examples.component.html',
  styleUrls: ['./custom-credit-card-examples.component.scss']
})
export class CustomCreditCardExamplesComponent implements OnInit, OnDestroy {
  public creditCardNumber = new FormControl(null, IMCreditCardValidator());
  public cardType = new FormControl(IMCreditCardTypeValidatorEnum.MasterCard);
  public IMCreditCardTypeValidatorEnum = IMCreditCardTypeValidatorEnum;
  private creditCardNumberSubscription: Subscription;

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public ngOnInit(): void {
    this.subscribeToCreditCardNumberValueEnter();
  }

  private subscribeToCreditCardNumberValueEnter(): void {
    this.creditCardNumberSubscription = this.creditCardNumber.valueChanges.subscribe((value: string) => {
      if (value) {
        const valueWithSpaces = value
          .replace(/[^\dA-Z]/g, '')
          .replace(/(.{4})/g, '$1 ')
          .trim();
        this.creditCardNumber.setValue(valueWithSpaces, {emitEvent: false});
      }
    });
  }

  public onCardTypeChange(card_type: IMCreditCardTypeValidatorEnum): void {
    this.creditCardNumber.setValidators(IMCreditCardValidator({creditCardType: card_type}));
    this.creditCardNumber.updateValueAndValidity({onlySelf: true});
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }

  public ngOnDestroy(): void {
    this.creditCardNumberSubscription.unsubscribe();
  }
}
