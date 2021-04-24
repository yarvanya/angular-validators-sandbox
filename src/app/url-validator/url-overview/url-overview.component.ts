import {Component} from '@angular/core';
import {UrlValidatorConfigurations} from '../url-validator-configurations.constant';

@Component({
  selector: 'app-url-overview',
  templateUrl: './url-overview.component.html',
  styleUrls: ['./url-overview.component.scss']
})
export class UrlOverviewComponent {
  public urlValidatorConfigurations = UrlValidatorConfigurations;
}
