import {Component} from '@angular/core';
import {UrlValidatorConfigurations} from '../url-validator-configurations.constant';
import {IMUrlProtocolTypeEnum} from 'angular-validators';

@Component({
  selector: 'app-url-api',
  templateUrl: './url-api.component.html',
  styleUrls: ['./url-api.component.scss']
})
export class UrlApiComponent {
  public IMUrlProtocolTypeEnum = IMUrlProtocolTypeEnum;
  public urlConfigurations = UrlValidatorConfigurations;
}
