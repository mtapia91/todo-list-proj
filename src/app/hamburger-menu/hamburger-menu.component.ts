import { Component } from '@angular/core';
import { SideNavService } from '../side-nav.service';


@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})

export class HamburgerMenuComponent {
  public isExpanded = true;

  constructor (private sideNavService: SideNavService) {}

  ngOnInit(): void {
    this.sideNavService.isSideNavOpen.subscribe((isSideNavOpen) => {
    this.isExpanded = isSideNavOpen
    });
  }
}
