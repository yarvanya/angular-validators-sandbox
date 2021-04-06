import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  IMCountryConfigInterface,
  IMCountryConfigurations,
  IMCountryEnum,
  IMPostCodeValidator
} from 'angular-validators';
import {AbstractControl, FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ErrorResolverService} from '@services/error-resolver.service';

@Component({
  selector: 'app-post-code-examples',
  templateUrl: './post-code-examples.component.html',
  styleUrls: ['./post-code-examples.component.scss']
})

export class PostCodeExamplesComponent implements OnInit, OnDestroy {
  public availableCountries: IMCountryConfigInterface[] = IMCountryConfigurations;

  public countryFormControl: FormControl = new FormControl(IMCountryEnum.Albania);
  public postCodeFormControl: FormControl = new FormControl(null, IMPostCodeValidator(this.countryFormControl?.value));
  private postCodeSubscription: Subscription;

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public ngOnInit(): void {
    this.subscribeToCountrySelectionValueChanges();
  }

  public subscribeToCountrySelectionValueChanges(): void {
    this.postCodeSubscription = this.countryFormControl.valueChanges.subscribe(() => {
      this.postCodeFormControl = new FormControl(
        this.postCodeFormControl?.value,
        IMPostCodeValidator(this.countryFormControl.value)
      );
      this.postCodeFormControl.markAsTouched();
    });
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }

  public ngOnDestroy(): void {
    this.postCodeSubscription.unsubscribe();
  }
}
