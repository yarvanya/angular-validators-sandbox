import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IMNumberInRangeValidator} from 'angular-validators';

@Component({
  selector: 'app-number-in-range-examples',
  templateUrl: './number-in-range-examples.component.html',
  styleUrls: ['./number-in-range-examples.component.scss']
})

export class NumberInRangeExamplesComponent {
  public percentageControl: FormControl = new FormControl(null, IMNumberInRangeValidator(1, 100));
}
