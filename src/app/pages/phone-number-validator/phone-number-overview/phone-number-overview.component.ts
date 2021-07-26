import {Component} from '@angular/core';
import {IMCountryConfigurations} from 'angular-validators';

@Component({
  selector: 'app-phone-number-overview',
  templateUrl: './phone-number-overview.component.html',
  styleUrls: ['./phone-number-overview.component.scss']
})

export class PhoneNumberOverviewComponent {
  public countryConfigurations = IMCountryConfigurations;
}
