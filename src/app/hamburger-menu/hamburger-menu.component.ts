import { Component } from '@angular/core';
import { SideNavService } from '../side-nav.service';


@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})

export class HamburgerMenuComponent {

  constructor (private sideNavService: SideNavService) {}

  hamburgerMenuClicked() {
    this.sideNavService.openSideNav();
  }
}
