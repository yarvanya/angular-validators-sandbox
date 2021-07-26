import {Component} from '@angular/core';
import {CreditCardTypes} from '../credit-card-types.constant';

@Component({
  selector: 'app-custom-credit-card-overview',
  templateUrl: './custom-credit-card-overview.component.html',
  styleUrls: ['./custom-credit-card-overview.component.scss']
})
export class CustomCreditCardOverviewComponent {
  public creditCardTypes = CreditCardTypes;
}
