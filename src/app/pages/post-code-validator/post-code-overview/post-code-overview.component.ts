import {Component} from '@angular/core';
import {IMCountryConfigurations} from 'angular-validators';

@Component({
  selector: 'app-post-code-overview',
  templateUrl: './post-code-overview.component.html',
  styleUrls: ['./post-code-overview.component.scss']
})

export class PostCodeOverviewComponent {
  public countryConfigurations = IMCountryConfigurations;
}
