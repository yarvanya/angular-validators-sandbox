import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {IMRequiredValidator} from 'angular-validators';

@Component({
  selector: 'app-custom-required-examples',
  templateUrl: './custom-required-examples.component.html',
  styleUrls: ['./custom-required-examples.component.scss']
})

export class CustomRequiredExamplesComponent {
  public diffTypesFormGroup: UntypedFormGroup = new UntypedFormGroup({
    text: new UntypedFormControl(null, IMRequiredValidator({isTrimValueRequired: true})),
    number: new UntypedFormControl(null, IMRequiredValidator({isZeroAllowed: true})),
    time: new UntypedFormControl(null, IMRequiredValidator()),
    date: new UntypedFormControl(null, IMRequiredValidator()),
    select: new UntypedFormControl(null, IMRequiredValidator()),
    checkbox: new UntypedFormControl(null, IMRequiredValidator({isCheckboxShouldBeChecked: true})),
    radiobutton: new UntypedFormControl(null, IMRequiredValidator())
  });
}
