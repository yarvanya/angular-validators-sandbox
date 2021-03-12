import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {IMGreaterThanNumberValidator} from 'angular-validators';
import {ErrorResolverService} from '../../../services/error-resolver.service';

@Component({
  selector: 'app-greater-than-number-examples',
  templateUrl: './greater-than-number-examples.component.html',
  styleUrls: ['./greater-than-number-examples.component.scss']
})

export class GreaterThanNumberExamplesComponent implements OnInit {
  public defaultAge = 18;
  public greaterThanNumberFormControl: FormControl = new FormControl(
    null,
    IMGreaterThanNumberValidator({comparingValue: this.defaultAge})
  );

  public form: FormGroup = new FormGroup({
    firstMonth: new FormControl(null, Validators.required),
    secondMonth: new FormControl(
      null,
      [Validators.required, IMGreaterThanNumberValidator({comparingControlKey: 'firstMonth'})]
    )
  });

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public ngOnInit(): void {
    this.form.get('firstMonth').valueChanges.subscribe(() => this.form.get('secondMonth').updateValueAndValidity());
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
