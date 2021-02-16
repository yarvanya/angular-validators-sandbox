import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularValidatorsComponent } from './angular-validators.component';

describe('AngularValidatorsComponent', () => {
  let component: AngularValidatorsComponent;
  let fixture: ComponentFixture<AngularValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
