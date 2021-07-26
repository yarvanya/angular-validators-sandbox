import {Component} from '@angular/core';
import {IMComparatorOperatorEnum} from 'angular-validators';

@Component({
  selector: 'app-date-comparator-api',
  templateUrl: './date-comparator-api.component.html',
  styleUrls: ['./date-comparator-api.component.scss']
})

export class DateComparatorApiComponent {
  public comparatorOperatorEnum = IMComparatorOperatorEnum;
}
