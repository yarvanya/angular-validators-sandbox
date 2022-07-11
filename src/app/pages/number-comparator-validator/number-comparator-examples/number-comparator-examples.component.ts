import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {IMComparatorOperatorEnum, IMNumberComparatorValidator} from 'angular-validators';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-number-comparator-examples',
  templateUrl: './number-comparator-examples.component.html',
  styleUrls: ['./number-comparator-examples.component.scss']
})

export class NumberComparatorExamplesComponent implements OnInit, OnDestroy {
  public defaultAge = 18;
  public equalFormControl: UntypedFormControl = new UntypedFormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingValue: this.defaultAge})
  );
  public greaterFormControl: UntypedFormControl = new UntypedFormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingValue: this.defaultAge})
  );
  public greaterEqualFormControl: UntypedFormControl = new UntypedFormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingValue: this.defaultAge})
  );
  public lessFormControl: UntypedFormControl = new UntypedFormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingValue: this.defaultAge})
  );
  public lessEqualFormControl: UntypedFormControl = new UntypedFormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.lessEqual, comparingValue: this.defaultAge})
  );

  public equalForm: UntypedFormGroup = new UntypedFormGroup({
    firstAge: new UntypedFormControl(null, Validators.required),
    secondAge: new UntypedFormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public greaterForm: UntypedFormGroup = new UntypedFormGroup({
    firstAge: new UntypedFormControl(null, Validators.required),
    secondAge: new UntypedFormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public greaterEqualForm: UntypedFormGroup = new UntypedFormGroup({
    firstAge: new UntypedFormControl(null, Validators.required),
    secondAge: new UntypedFormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public lessForm: UntypedFormGroup = new UntypedFormGroup({
    firstAge: new UntypedFormControl(null, Validators.required),
    secondAge: new UntypedFormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public lessEqualForm: UntypedFormGroup = new UntypedFormGroup({
    firstAge: new UntypedFormControl(null, Validators.required),
    secondAge: new UntypedFormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.lessEqual, comparingControlKey: 'firstAge'})
      ]
    )
  });

  private subscriptions = new Subject();

  public ngOnInit(): void {
    this.equalForm.get('firstAge').valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.equalForm.get('secondAge').updateValueAndValidity());
    this.greaterForm.get('firstAge').valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.greaterForm.get('secondAge').updateValueAndValidity());
    this.greaterEqualForm.get('firstAge').valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.greaterEqualForm.get('secondAge').updateValueAndValidity());
    this.lessForm.get('firstAge').valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.lessForm.get('secondAge').updateValueAndValidity());
    this.lessEqualForm.get('firstAge').valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.lessEqualForm.get('secondAge').updateValueAndValidity());
  }

  public ngOnDestroy(): void {
    this.subscriptions.next();
    this.subscriptions.complete();
  }
}
