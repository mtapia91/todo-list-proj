import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';

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
import { DatePickerComponent } from './date-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { CompletedComponent } from './pages/completed/completed.component';
import { UncompletedComponent } from './pages/uncompleted/uncompleted.component';
import { DeletedComponent } from './pages/deleted/deleted.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoBarComponent,
    TodoListComponent,
    TodoListItemComponent,
    DrawerComponent,
    AppNavBarComponent,
    HamburgerMenuComponent,
    DatePickerComponent,
    CompletedComponent,
    UncompletedComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'app-completed', component: CompletedComponent },
      { path: 'app-uncompleted', component: UncompletedComponent },
      { path: 'app-deleted', component: DeletedComponent },
      { path: '', redirectTo: 'app-todo-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'app-todo-list', pathMatch: 'full' }
    ]),
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [SideNavService, MatSidenavContainer, MatDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule { }
