import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private _isSideNavOpen = new BehaviorSubject(false);
  public isSideNavOpen = this._isSideNavOpen.asObservable();

  constructor() { }

  openSideNav(): void{
    this._isSideNavOpen.next(true);
  }

  closeSideNav(): void {
    this._isSideNavOpen.next(false);
  }
}
