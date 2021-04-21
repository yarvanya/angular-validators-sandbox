import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IMCountryConfigurations, IMPhoneNumberValidator, IMCountryConfigInterface, IMCountryEnum} from 'angular-validators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-phone-number-examples',
  templateUrl: './phone-number-examples.component.html',
  styleUrls: ['./phone-number-examples.component.scss']
})

export class PhoneNumberExamplesComponent implements OnInit, OnDestroy {
  public availableCountries: IMCountryConfigInterface[] = IMCountryConfigurations;

  public countryFormControl: FormControl = new FormControl(IMCountryEnum.Albania);
  public phoneNumberFormControl: FormControl = new FormControl(null, IMPhoneNumberValidator(this.countryFormControl?.value));
  private countrySubscription: Subscription;

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

  public ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
  }
}
