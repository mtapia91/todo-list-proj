import { Component } from '@angular/core';
import { SideNavService } from './side-nav.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-proj';
  opened: boolean = false;


}
