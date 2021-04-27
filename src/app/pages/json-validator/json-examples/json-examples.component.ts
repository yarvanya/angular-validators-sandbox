import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IMJSONValidator} from 'angular-validators';
import {HttpClient} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-json-examples',
  templateUrl: './json-examples.component.html',
  styleUrls: ['./json-examples.component.scss']
})

export class JsonExamplesComponent implements OnInit, OnDestroy {
  public jsonFormControl: FormControl = new FormControl(null, IMJSONValidator());
  public jsonExample: JSON;
  private subscriptions = new Subject();

  constructor(
    private _http: HttpClient
  ) {}

  public ngOnInit(): void {
    this.getJSONExample();
  }

  private getJSONExample(): void {
    this._http.get('assets/jsons/example.json')
      .pipe(takeUntil(this.subscriptions))
      .subscribe((json_data: JSON) => {
        this.jsonExample = json_data;
      });
  }

  public ngOnDestroy(): void {
    this.subscriptions.next();
    this.subscriptions.complete();
  }
}
