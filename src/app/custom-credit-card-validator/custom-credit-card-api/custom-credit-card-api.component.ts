import {Component} from '@angular/core';
import {CreditCardTypes} from '../credit-card-types.constant';

@Component({
  selector: 'app-custom-credit-card-api',
  templateUrl: './custom-credit-card-api.component.html',
  styleUrls: ['./custom-credit-card-api.component.scss']
})
export class CustomCreditCardApiComponent {
  public creditCardTypes = CreditCardTypes;
}
