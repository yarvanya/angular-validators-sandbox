import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {IMPasswordValidator, IMPasswordValidatorConfigModel} from 'angular-validators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custom-password-examples',
  templateUrl: './custom-password-examples.component.html',
  styleUrls: ['./custom-password-examples.component.scss']
})
export class CustomPasswordExamplesComponent implements OnInit, OnDestroy {
  public passwordFormGroup = new UntypedFormGroup({
    minLength: new UntypedFormControl(6, Validators.min(1)),
    minNumberQuantity: new UntypedFormControl(null, Validators.min(0)),
    minCapitalLettersQuantity: new UntypedFormControl(null, Validators.min(0)),
    minSmallLettersQuantity: new UntypedFormControl(null, Validators.min(0)),
    minSpecialCharactersQuantity: new UntypedFormControl(null, Validators.min(0))
  });

  public password = new UntypedFormControl(null, IMPasswordValidator({
    minLength: this.passwordFormGroup.get('minLength').value
  }));
  public hidePassword = true;
  private passwordSubscription: Subscription;

  public ngOnInit(): void {
    this.subscribeToPasswordValueChanges();
  }

  private subscribeToPasswordValueChanges(): void {
    this.passwordSubscription = this.passwordFormGroup.valueChanges.subscribe((config: IMPasswordValidatorConfigModel) => {
      this.password.setValidators(IMPasswordValidator(config));
      this.password.updateValueAndValidity();
    });
  }

  public ngOnDestroy(): void {
    this.passwordSubscription.unsubscribe();
  }
}
