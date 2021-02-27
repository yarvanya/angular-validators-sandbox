import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {IMRequiredValidator} from 'angular-validators';
import {ErrorResolverService} from '../../../services/error-resolver.service';

@Component({
  selector: 'app-custom-required-examples',
  templateUrl: './custom-required-examples.component.html',
  styleUrls: ['./custom-required-examples.component.scss']
})

export class CustomRequiredExamplesComponent implements OnInit {
  public diffTypesFormGroup: FormGroup = new FormGroup({
    text: new FormControl(null, IMRequiredValidator()),
    number: new FormControl(null, IMRequiredValidator()),
    time: new FormControl(null, IMRequiredValidator()),
    date: new FormControl(null, IMRequiredValidator()),
    select: new FormControl(null, IMRequiredValidator())
  });

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  ngOnInit(): void {}

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
