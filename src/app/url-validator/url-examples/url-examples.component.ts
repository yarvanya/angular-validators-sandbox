import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IMUrlValidator, IMUrlProtocolTypeEnum} from 'angular-validators';

@Component({
  selector: 'app-url-examples',
  templateUrl: './url-examples.component.html',
  styleUrls: ['./url-examples.component.scss']
})
export class UrlExamplesComponent {
  public urlControl = new FormControl(null, IMUrlValidator({protocolType: IMUrlProtocolTypeEnum.Http}));
}
