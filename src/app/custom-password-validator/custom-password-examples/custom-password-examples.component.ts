import {Component, OnDestroy, OnInit} from '@angular/core';
import {ErrorResolverService} from '@services/error-resolver.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {IMPasswordValidator} from 'angular-validators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'im-custom-password-examples',
  templateUrl: './custom-password-examples.component.html',
  styleUrls: ['./custom-password-examples.component.scss']
})
export class CustomPasswordExamplesComponent implements OnInit, OnDestroy {
  public passwordFormGroup = new FormGroup({
    minLength: new FormControl(null, Validators.min(1)),
    minNumberQuantity: new FormControl(null, Validators.min(0)),
    passwordMinCapitalLength: new FormControl(null, Validators.min(0)),
    passwordMinSmallLength: new FormControl(null, Validators.min(0)),
    passwordMinSpecialCharacterLength: new FormControl(null, Validators.min(0))
  });

  public password = new FormControl(null, IMPasswordValidator());
  public hidePassword = true;
  private passwordSubscription: Subscription;

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public ngOnInit(): void {
    this.subscribeToPasswordValueChanges();
  }

  private subscribeToPasswordValueChanges(): void {
    this.passwordSubscription = this.passwordFormGroup.valueChanges.subscribe(
      value => this.password.setValidators(IMPasswordValidator(value))
    );
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }

  public ngOnDestroy(): void {
    this.passwordSubscription.unsubscribe();
  }
}
