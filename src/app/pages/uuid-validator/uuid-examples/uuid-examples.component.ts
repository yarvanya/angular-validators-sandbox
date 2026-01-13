import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {IMUUIdValidator} from 'angular-validators';

@Component({
  selector: 'app-uuid-examples',
  templateUrl: './uuid-examples.component.html',
  styleUrls: ['./uuid-examples.component.scss']
})
export class UuidExamplesComponent {
  public uuidControl = new UntypedFormControl(null, IMUUIdValidator());
  private nilId = '00000000-0000-0000-0000-000000000000';

  public onUUIdGenerate(): void {
    this.uuidControl.setValue(this.generateUUId());
    this.uuidControl.markAsTouched();
    this.uuidControl.updateValueAndValidity();
  }

  public onNILGenerate(): void {
    this.uuidControl.setValue(this.nilId);
    this.uuidControl.markAsTouched();
    this.uuidControl.updateValueAndValidity();
  }

  private generateUUId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
