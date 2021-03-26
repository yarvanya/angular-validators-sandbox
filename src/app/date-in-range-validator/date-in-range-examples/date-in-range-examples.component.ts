import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMDateInRangeValidator} from 'angular-validators';
import * as moment from 'moment';
import {Moment} from 'moment';
import {ErrorResolverService} from '@services/error-resolver.service';

@Component({
  selector: 'app-date-in-range-examples',
  templateUrl: './date-in-range-examples.component.html',
  styleUrls: ['./date-in-range-examples.component.scss']
})

export class DateInRangeExamplesComponent implements OnInit {
  public from = '26.03.2021';
  public to = '26.04.2021';

  private fromDate: Moment = moment(this.from, 'DD.MM.YYYY').startOf('day');
  private toDate: Moment = moment(this.to, 'DD.MM.YYYY').startOf('day');
  public dateControl: FormControl = new FormControl(null, IMDateInRangeValidator(this.fromDate, this.toDate));

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  ngOnInit(): void {}

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
