import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMNumberInRangeValidator} from 'angular-validators';
import {ErrorResolverService} from '@services/error-resolver.service';

@Component({
  selector: 'app-number-in-range-examples',
  templateUrl: './number-in-range-examples.component.html',
  styleUrls: ['./number-in-range-examples.component.scss']
})

export class NumberInRangeExamplesComponent implements OnInit {
  public percentageControl: FormControl = new FormControl(null, IMNumberInRangeValidator(1, 100));

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  ngOnInit(): void {}

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
