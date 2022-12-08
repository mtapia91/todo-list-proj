import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodoBarComponent } from './add-todo-bar/add-todo-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { DrawerComponent } from './drawer/drawer.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { RouterModule } from '@angular/router';
import { SideNavService } from './side-nav.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoBarComponent,
    TodoListComponent,
    TodoListItemComponent,
    DrawerComponent,
    AppNavBarComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'app-add-todo-bar', component: AddTodoBarComponent },
      { path: '', redirectTo: 'app-todo-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'app-todo-list', pathMatch: 'full' }
    ]),
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
