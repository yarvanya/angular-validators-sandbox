import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  IMCountryConfigInterface,
  IMCountryConfigurations,
  IMCountryEnum,
  IMPostCodeValidator
} from 'angular-validators';
import {AbstractControl, UntypedFormControl} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-code-examples',
  templateUrl: './post-code-examples.component.html',
  styleUrls: ['./post-code-examples.component.scss']
})

export class PostCodeExamplesComponent implements OnInit, OnDestroy {
  public availableCountries: IMCountryConfigInterface[] = IMCountryConfigurations;

  public countryFormControl: UntypedFormControl = new UntypedFormControl(IMCountryEnum.Albania);
  public postCodeFormControl: UntypedFormControl = new UntypedFormControl(null, IMPostCodeValidator(this.countryFormControl?.value));
  private postCodeSubscription: Subscription;

  public ngOnInit(): void {
    this.subscribeToCountrySelectionValueChanges();
  }

  public subscribeToCountrySelectionValueChanges(): void {
    this.postCodeSubscription = this.countryFormControl.valueChanges.subscribe(() => {
      this.postCodeFormControl = new UntypedFormControl(
        this.postCodeFormControl?.value,
        IMPostCodeValidator(this.countryFormControl.value)
      );
      this.postCodeFormControl.markAsTouched();
    });
  }

  public ngOnDestroy(): void {
    this.postCodeSubscription.unsubscribe();
  }
}
