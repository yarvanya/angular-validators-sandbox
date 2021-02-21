import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {IMEmailValidator, IMPhoneNumberValidator, IMCountryCodeEnum} from 'angular-validators';
import {ErrorResolverService} from '../services/error-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public sandboxFormGroup = new FormGroup({
    text: new FormControl(null, IMEmailValidator({scale: 2})),
    number: new FormControl(null, IMPhoneNumberValidator(IMCountryCodeEnum.fr))
  });

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
