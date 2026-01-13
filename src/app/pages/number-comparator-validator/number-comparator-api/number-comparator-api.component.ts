import {Component} from '@angular/core';
import {IMComparatorOperatorEnum} from 'angular-validators';

@Component({
    selector: 'app-number-comparator-api',
    templateUrl: './number-comparator-api.component.html',
    styleUrls: ['./number-comparator-api.component.scss'],
    standalone: false
})

export class NumberComparatorApiComponent {
  public comparatorOperatorEnum = IMComparatorOperatorEnum;
}
