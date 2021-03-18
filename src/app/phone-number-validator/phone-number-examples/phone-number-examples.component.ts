import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMCountryCodeEnum, IMPhoneNumberValidator} from 'angular-validators';
import {ErrorResolverService} from '@services/error-resolver.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-phone-number-examples',
  templateUrl: './phone-number-examples.component.html',
  styleUrls: ['./phone-number-examples.component.scss']
})

export class PhoneNumberExamplesComponent implements OnInit, OnDestroy {
  public availableCountries = [
    {label: 'Ukraine', value: IMCountryCodeEnum.ua},
    {label: 'Russia', value: IMCountryCodeEnum.ru},
    {label: 'France', value: IMCountryCodeEnum.fr}
  ];

  public countryFormControl: FormControl = new FormControl(IMCountryCodeEnum.ua);
  public phoneNumberFormControl: FormControl = new FormControl(null, IMPhoneNumberValidator(this.countryFormControl?.value));
  private countrySubscription: Subscription;

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public ngOnInit(): void {
    this.subscribeToCountrySelectionValueChanges();
  }

  public subscribeToCountrySelectionValueChanges(): void {
    this.countrySubscription = this.countryFormControl.valueChanges.subscribe(() => {
      this.phoneNumberFormControl = new FormControl(
        this.phoneNumberFormControl?.value,
        IMPhoneNumberValidator(this.countryFormControl.value)
      );
      this.phoneNumberFormControl.markAsTouched();
    });
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }

  public ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
  }
}
