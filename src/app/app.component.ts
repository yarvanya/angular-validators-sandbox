import {Component} from '@angular/core';
import {SidebarRouterInterface} from './interfaces/sidebar-router.interface';
import {SidebarLinks} from './constants/sidebar-links.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public sidebarLinks: SidebarRouterInterface[] = SidebarLinks;
}
