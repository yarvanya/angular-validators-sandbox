import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {IMNumberInRangeValidator} from 'angular-validators';

@Component({
  selector: 'app-number-in-range-examples',
  templateUrl: './number-in-range-examples.component.html',
  styleUrls: ['./number-in-range-examples.component.scss']
})

export class NumberInRangeExamplesComponent {
  public percentageControl: UntypedFormControl = new UntypedFormControl(null, IMNumberInRangeValidator(1, 100));
}
