import {Component} from '@angular/core';

export interface SidebarRouterInterface {
  routerLink: string;
  linkText: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {}

  public sidebarLinks: SidebarRouterInterface[] = [
    {routerLink: '', linkText: 'Home'},
    {routerLink: 'custom-required-validator-overview', linkText: 'Custom Required Validator'},
    {routerLink: 'custom-email-validator-overview', linkText: 'Custom Email Validator'},
    {routerLink: 'phone-number-validator-overview', linkText: 'Phone Number Validator'},
    {routerLink: 'custom-credit-card-overview', linkText: 'Credit Card Validator'},
    {routerLink: 'number-comparator-validator-overview', linkText: 'Number Comparator Validator'},
    {routerLink: 'password-validator-overview', linkText: 'Password Validator'}
  ];
}
