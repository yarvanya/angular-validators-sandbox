import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMEmailValidator} from 'angular-validators';
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

  public ngOnDestroy(): void {
    this.scaleSelectionSubscription.unsubscribe();
  }
}
