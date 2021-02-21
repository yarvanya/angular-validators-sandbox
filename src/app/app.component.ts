import {Component} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {IMEmailValidator} from 'angular-validators';
import {ErrorResolverService} from '../services/error-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public emailFormControl = new FormControl(null, IMEmailValidator());

  constructor(
    private errorResolverService: ErrorResolverService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.errorResolverService.getErrorMessage(control);
  }
}
