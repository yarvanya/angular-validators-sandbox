import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {IMUrlValidator} from 'angular-validators';

@Component({
  selector: 'app-url-examples',
  templateUrl: './url-examples.component.html',
  styleUrls: ['./url-examples.component.scss']
})
export class UrlExamplesComponent {
  public urlControl = new UntypedFormControl(null, IMUrlValidator());
}
