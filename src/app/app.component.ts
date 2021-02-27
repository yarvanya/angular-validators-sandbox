import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {
  IMEmailValidator,
  IMPhoneNumberValidator,
  IMRequiredValidator,
  IMCountryCodeEnum
} from 'angular-validators';
import {ErrorResolverService} from '../services/error-resolver.service';
import {RequiredCheckboxData} from '../constants/required-checkbox-data.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public requiredCheckboxData = RequiredCheckboxData;

  public sandboxFormGroup = new FormGroup({
    text: new FormControl(null, IMEmailValidator({scale: 2})),
    number: new FormControl(null, IMPhoneNumberValidator(IMCountryCodeEnum.fr)),
    textRequired: new FormControl(null, IMRequiredValidator({isTrimValueRequired: true})),
    numberRequired: new FormControl(null, IMRequiredValidator({isZeroAllowed: true})),
    toggleRequired: new FormControl(null, IMRequiredValidator()),
  });

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
