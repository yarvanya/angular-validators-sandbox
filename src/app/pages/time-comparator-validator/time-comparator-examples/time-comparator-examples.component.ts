import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IMComparatorOperatorEnum, IMTimeComparatorValidator} from 'angular-validators';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-time-comparator-examples',
  templateUrl: './time-comparator-examples.component.html',
  styleUrls: ['./time-comparator-examples.component.scss']
})

export class TimeComparatorExamplesComponent implements OnInit, OnDestroy {
  public nowDate: Date = new Date();
  public nowTime: string = `${this.nowDate.getHours()}:${this.nowDate.getMinutes()}`;
  public equalFormControl: FormControl = new FormControl(
    null,
    IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingValue: this.nowTime})
  );
  public greaterFormControl: FormControl = new FormControl(
    null,
    IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingValue: this.nowTime})
  );
  public greaterEqualFormControl: FormControl = new FormControl(
    null,
    IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingValue: this.nowTime})
  );
  public lessFormControl: FormControl = new FormControl(
    null,
    IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingValue: this.nowTime})
  );
  public lessEqualFormControl: FormControl = new FormControl(
    null,
    IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.lessEqual, comparingValue: this.nowTime})
  );

  public equalForm: FormGroup = new FormGroup({
    startTime: new FormControl(null, Validators.required),
    endTime: new FormControl(
      null,
      [
        Validators.required,
        IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingControlKey: 'startTime'})
      ]
    )
  });
  public greaterForm: FormGroup = new FormGroup({
    startTime: new FormControl(null, Validators.required),
    endTime: new FormControl(
      null,
      [
        Validators.required,
        IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingControlKey: 'startTime'})
      ]
    )
  });
  public greaterEqualForm: FormGroup = new FormGroup({
    startTime: new FormControl(null, Validators.required),
    endTime: new FormControl(
      null,
      [
        Validators.required,
        IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingControlKey: 'startTime'})
      ]
    )
  });
  public lessForm: FormGroup = new FormGroup({
    startTime: new FormControl(null, Validators.required),
    endTime: new FormControl(
      null,
      [
        Validators.required,
        IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingControlKey: 'startTime'})
      ]
    )
  });
  public lessEqualForm: FormGroup = new FormGroup({
    startTime: new FormControl(null, Validators.required),
    endTime: new FormControl(
      null,
      [
        Validators.required,
        IMTimeComparatorValidator({comparingOperator: IMComparatorOperatorEnum.lessEqual, comparingControlKey: 'startTime'})
      ]
    )
  });

  private subscriptions = new Subject();

  constructor() {}

  public ngOnInit(): void {
    this.equalForm.get('startTime').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.equalForm.get('endTime').updateValueAndValidity());
    this.greaterForm.get('startTime').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.greaterForm.get('endTime').updateValueAndValidity());
    this.greaterEqualForm.get('startTime').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.greaterEqualForm.get('endTime').updateValueAndValidity());
    this.lessForm.get('startTime').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.lessForm.get('endTime').updateValueAndValidity());
    this.lessEqualForm.get('startTime').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.lessEqualForm.get('endTime').updateValueAndValidity());
  }

  public ngOnDestroy(): void {
    this.subscriptions.next();
    this.subscriptions.complete();
  }
}
