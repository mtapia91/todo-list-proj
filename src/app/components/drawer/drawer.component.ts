import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/side-nav.service';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit{
  public isExpanded = true;

  constructor (private sideNavService: SideNavService) {}

  ngOnInit(): void {

    this.sideNavService.isSideNavOpen.subscribe((isSideNavOpen) => {
    this.isExpanded = isSideNavOpen
    });
  }

  drawerClose() {
    this.sideNavService.closeSideNav();
  }

}
