import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMEmailValidator} from 'angular-validators';
import {ErrorResolverService} from '@services/error-resolver.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custom-email-examples',
  templateUrl: './custom-email-examples.component.html',
  styleUrls: ['./custom-email-examples.component.scss']
})

export class CustomEmailExamplesComponent implements OnInit, OnDestroy {
  public defaultEmailScale = 2;
  public scaleFormControl: FormControl = new FormControl(this.defaultEmailScale);
  public emailFormControl: FormControl = new FormControl(null, IMEmailValidator({scale: this.scaleFormControl.value}));
  private scaleSelectionSubscription: Subscription;

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public ngOnInit(): void {
    this.subscribeToScaleSelectionValueChanges();
  }

  public subscribeToScaleSelectionValueChanges(): void {
    this.scaleSelectionSubscription = this.scaleFormControl.valueChanges.subscribe(() => {
      this.emailFormControl = new FormControl(
        this.emailFormControl?.value,
        IMEmailValidator({scale: this.scaleFormControl.value})
      );
      this.emailFormControl.markAsTouched();
    });
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }

  public ngOnDestroy(): void {
    this.scaleSelectionSubscription.unsubscribe();
  }
}
