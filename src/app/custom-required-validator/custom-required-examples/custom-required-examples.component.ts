import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {IMRequiredValidator} from 'angular-validators';
import {ErrorResolverService} from '../../../services/error-resolver.service';

@Component({
  selector: 'app-custom-required-examples',
  templateUrl: './custom-required-examples.component.html',
  styleUrls: ['./custom-required-examples.component.scss']
})

export class CustomRequiredExamplesComponent {
  // Controls with custom required validator
  public customText = new FormControl(null, IMRequiredValidator({isTrimValueRequired: true}));
  public customNumber = new FormControl(null, IMRequiredValidator({isZeroAllowed: false}));
  public customTime = new FormControl(null, IMRequiredValidator());
  public customDate = new FormControl(null, IMRequiredValidator());
  public customSelect = new FormControl(null, IMRequiredValidator());
  public customFromArrayGroup = new FormGroup({
    array: new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl()
    ], IMRequiredValidator())
  });

  // Controls with native required validator
  public nativeText = new FormControl(null, Validators.required);
  public nativeNumber = new FormControl(null, Validators.required);
  public nativeTime = new FormControl(null, Validators.required);
  public nativeDate = new FormControl(null, Validators.required);
  public nativeSelect = new FormControl(null, Validators.required);
  public nativeFromArrayGroup = new FormGroup({
    array: new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl()
    ], Validators.required)
  });

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
