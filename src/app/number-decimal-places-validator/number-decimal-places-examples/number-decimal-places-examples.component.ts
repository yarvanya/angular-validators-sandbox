import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IMNumberDecimalPlacesValidator} from 'angular-validators';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-number-decimal-places-examples',
  templateUrl: './number-decimal-places-examples.component.html',
  styleUrls: ['./number-decimal-places-examples.component.scss']
})

export class NumberDecimalPlacesExamplesComponent implements OnInit, OnDestroy {
  public scales: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  public scaleControl: FormControl = new FormControl(this.scales[0]);
  public fixScaleControl: FormControl = new FormControl(false);
  public decimalPlacesControl: FormControl = new FormControl(
    null,
    IMNumberDecimalPlacesValidator(this.scaleControl.value, this.fixScaleControl.value)
  );
  private subscriptions: Subject<boolean> = new Subject<boolean>();

  public ngOnInit(): void {
    this.subscribeToScaleControlValueChanges();
    this.subscribeToFixScaleControlValueChanges();
  }

  private subscribeToScaleControlValueChanges(): void {
    this.scaleControl.valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe((scale: number) => {
        this.createNewDecimalPlacesControl(scale, this.fixScaleControl.value);
      });
  }

  private subscribeToFixScaleControlValueChanges(): void {
    this.fixScaleControl.valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe((fixed: boolean) => {
        this.createNewDecimalPlacesControl(this.scaleControl.value, fixed);
      });
  }

  private createNewDecimalPlacesControl(scale: number, fixed: boolean): void {
    this.decimalPlacesControl = new FormControl(
      this.decimalPlacesControl?.value,
      IMNumberDecimalPlacesValidator(scale, fixed)
    );
    this.decimalPlacesControl.markAsTouched();
  }

  public ngOnDestroy(): void {
    this.subscriptions.next(true);
    this.subscriptions.complete();
  }
}
