import {Component} from '@angular/core';
import {IMComparatorOperatorEnum} from 'angular-validators';

@Component({
  selector: 'app-time-comparator-api',
  templateUrl: './time-comparator-api.component.html',
  styleUrls: ['./time-comparator-api.component.scss']
})

export class TimeComparatorApiComponent {
  public comparatorOperatorEnum = IMComparatorOperatorEnum;
}
