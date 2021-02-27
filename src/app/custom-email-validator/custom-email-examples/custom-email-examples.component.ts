import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMEmailValidator} from 'angular-validators';
import {ErrorResolverService} from '../../../services/error-resolver.service';

@Component({
  selector: 'app-custom-email-examples',
  templateUrl: './custom-email-examples.component.html',
  styleUrls: ['./custom-email-examples.component.scss']
})

export class CustomEmailExamplesComponent implements OnInit {
  public defaultEmailScale = 2;
  public scaleFormControl: FormControl = new FormControl(this.defaultEmailScale);
  public emailFormControl: FormControl = new FormControl(null, IMEmailValidator({scale: this.scaleFormControl.value}));

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public ngOnInit(): void {
    this.subscribeToScaleSelectionValueChanges();
  }

  public subscribeToScaleSelectionValueChanges(): void {
    this.scaleFormControl.valueChanges.subscribe(() => {
      this.emailFormControl = new FormControl(
        this.emailFormControl?.value,
        IMEmailValidator({scale: this.scaleFormControl.value})
      );
      this.emailFormControl.markAsTouched();
    });
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
