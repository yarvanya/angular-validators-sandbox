import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  public equalFormControl: FormControl = new FormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingValue: this.defaultAge})
  );
  public greaterFormControl: FormControl = new FormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingValue: this.defaultAge})
  );
  public greaterEqualFormControl: FormControl = new FormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingValue: this.defaultAge})
  );
  public lessFormControl: FormControl = new FormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingValue: this.defaultAge})
  );
  public lessEqualFormControl: FormControl = new FormControl(
    null,
    IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.lessEqual, comparingValue: this.defaultAge})
  );

  public equalForm: FormGroup = new FormGroup({
    firstAge: new FormControl(null, Validators.required),
    secondAge: new FormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public greaterForm: FormGroup = new FormGroup({
    firstAge: new FormControl(null, Validators.required),
    secondAge: new FormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public greaterEqualForm: FormGroup = new FormGroup({
    firstAge: new FormControl(null, Validators.required),
    secondAge: new FormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public lessForm: FormGroup = new FormGroup({
    firstAge: new FormControl(null, Validators.required),
    secondAge: new FormControl(
      null,
      [
        Validators.required,
        IMNumberComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingControlKey: 'firstAge'})
      ]
    )
  });
  public lessEqualForm: FormGroup = new FormGroup({
    firstAge: new FormControl(null, Validators.required),
    secondAge: new FormControl(
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
