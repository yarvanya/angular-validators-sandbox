import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IMRequiredValidator} from 'angular-validators';

@Component({
  selector: 'app-custom-required-examples',
  templateUrl: './custom-required-examples.component.html',
  styleUrls: ['./custom-required-examples.component.scss']
})

export class CustomRequiredExamplesComponent {
  public diffTypesFormGroup: FormGroup = new FormGroup({
    text: new FormControl(null, IMRequiredValidator()),
    number: new FormControl(null, IMRequiredValidator()),
    time: new FormControl(null, IMRequiredValidator()),
    date: new FormControl(null, IMRequiredValidator()),
    select: new FormControl(null, IMRequiredValidator())
  });
}
