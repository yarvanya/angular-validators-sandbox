import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IMPasswordValidator, IMPasswordValidatorConfigModel} from 'angular-validators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custom-password-examples',
  templateUrl: './custom-password-examples.component.html',
  styleUrls: ['./custom-password-examples.component.scss']
})
export class CustomPasswordExamplesComponent implements OnInit, OnDestroy {
  public passwordFormGroup = new FormGroup({
    minLength: new FormControl(6, Validators.min(1)),
    minNumberQuantity: new FormControl(null, Validators.min(0)),
    minCapitalLettersQuantity: new FormControl(null, Validators.min(0)),
    minSmallLettersQuantity: new FormControl(null, Validators.min(0)),
    minSpecialCharactersQuantity: new FormControl(null, Validators.min(0))
  });

  public password = new FormControl(null, IMPasswordValidator({
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
