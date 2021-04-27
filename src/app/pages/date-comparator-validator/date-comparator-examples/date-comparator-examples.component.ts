import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IMComparatorOperatorEnum, IMDateComparatorValidator} from 'angular-validators';
import * as moment from 'moment';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-date-comparator-examples',
  templateUrl: './date-comparator-examples.component.html',
  styleUrls: ['./date-comparator-examples.component.scss']
})

export class DateComparatorExamplesComponent implements OnInit, OnDestroy {
  public today = moment().startOf('day');
  public equalFormControl: FormControl = new FormControl(
    null,
    IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingValue: this.today})
  );
  public greaterFormControl: FormControl = new FormControl(
    null,
    IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingValue: this.today})
  );
  public greaterEqualFormControl: FormControl = new FormControl(
    null,
    IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingValue: this.today})
  );
  public lessFormControl: FormControl = new FormControl(
    null,
    IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingValue: this.today})
  );
  public lessEqualFormControl: FormControl = new FormControl(
    null,
    IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.lessEqual, comparingValue: this.today})
  );

  public equalForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(
      null,
      [
        Validators.required,
        IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.equal, comparingControlKey: 'startDate'})
      ]
    )
  });
  public greaterForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(
      null,
      [
        Validators.required,
        IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greater, comparingControlKey: 'startDate'})
      ]
    )
  });
  public greaterEqualForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(
      null,
      [
        Validators.required,
        IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.greaterEqual, comparingControlKey: 'startDate'})
      ]
    )
  });
  public lessForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(
      null,
      [
        Validators.required,
        IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.less, comparingControlKey: 'startDate'})
      ]
    )
  });
  public lessEqualForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(
      null,
      [
        Validators.required,
        IMDateComparatorValidator({comparingOperator: IMComparatorOperatorEnum.lessEqual, comparingControlKey: 'startDate'})
      ]
    )
  });

  private subscriptions = new Subject();

  public ngOnInit(): void {
    this.equalForm.get('startDate').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.equalForm.get('endDate').updateValueAndValidity());
    this.greaterForm.get('startDate').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.greaterForm.get('endDate').updateValueAndValidity());
    this.greaterEqualForm.get('startDate').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.greaterEqualForm.get('endDate').updateValueAndValidity());
    this.lessForm.get('startDate').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.lessForm.get('endDate').updateValueAndValidity());
    this.lessEqualForm.get('startDate').valueChanges.pipe(takeUntil(this.subscriptions))
      .subscribe(() => this.lessEqualForm.get('endDate').updateValueAndValidity());
  }

  public ngOnDestroy(): void {
    this.subscriptions.next();
    this.subscriptions.complete();
  }
}
