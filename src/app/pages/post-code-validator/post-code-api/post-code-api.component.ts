import {Component} from '@angular/core';
import {IMCountryConfigurations} from 'angular-validators';

@Component({
  selector: 'app-post-code-api',
  templateUrl: './post-code-api.component.html',
  styleUrls: ['./post-code-api.component.scss']
})

export class PostCodeApiComponent {
  public countryConfigurations = IMCountryConfigurations;
}
