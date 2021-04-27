import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IMEmailValidator} from 'angular-validators';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-custom-email-examples',
  templateUrl: './custom-email-examples.component.html',
  styleUrls: ['./custom-email-examples.component.scss']
})

export class CustomEmailExamplesComponent implements OnInit, OnDestroy {
  public defaultEmailScale = 2;
  public scaleFormControl: FormControl = new FormControl(this.defaultEmailScale);
  public fixScaleControl: FormControl = new FormControl(false);
  public emailFormControl: FormControl = new FormControl(
    null,
    IMEmailValidator(this.scaleFormControl.value, this.fixScaleControl.value)
  );
  private subscriptions: Subject<boolean> = new Subject<boolean>();

  public ngOnInit(): void {
    this.subscribeToScaleSelectionValueChanges();
    this.subscribeToFixScaleControlValueChanges();
  }

  public subscribeToScaleSelectionValueChanges(): void {
    this.scaleFormControl.valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe((scale: number) => {
        this.createNewEmailControl(scale, this.fixScaleControl?.value);
      });
  }

  private subscribeToFixScaleControlValueChanges(): void {
    this.fixScaleControl.valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe((fixed: boolean) => {
        this.createNewEmailControl(this.scaleFormControl?.value, fixed);
      });
  }

  private createNewEmailControl(scale: number, fixed: boolean): void {
    this.emailFormControl = new FormControl(this.emailFormControl?.value, IMEmailValidator(scale, fixed));
    this.emailFormControl.markAsTouched();
  }

  public ngOnDestroy(): void {
    this.subscriptions.next(true);
    this.subscriptions.complete();
  }
}
