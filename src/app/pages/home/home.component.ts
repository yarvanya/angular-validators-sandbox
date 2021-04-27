import {Component} from '@angular/core';
import {SidebarRouterInterface} from '../../interfaces/sidebar-router.interface';
import {SidebarLinks} from '../../constants/sidebar-links.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public sidebarLinks: SidebarRouterInterface[] = SidebarLinks;
}
