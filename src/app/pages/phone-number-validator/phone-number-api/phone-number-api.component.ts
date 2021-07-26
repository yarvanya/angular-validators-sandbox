import {Component} from '@angular/core';
import {IMCountryConfigurations} from 'angular-validators';

@Component({
  selector: 'app-phone-number-api',
  templateUrl: './phone-number-api.component.html',
  styleUrls: ['./phone-number-api.component.scss']
})

export class PhoneNumberApiComponent {
  public countryConfigurations = IMCountryConfigurations;
}
