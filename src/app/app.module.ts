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
import { RouterModule } from '@angular/router';
import { SideNavService } from './side-nav.service';
import { MatButtonModule } from '@angular/material/button';
import { CompletedComponent } from './pages/completed/completed.component';
import { UncompletedComponent } from './pages/uncompleted/uncompleted.component';
import { DeletedComponent } from './pages/deleted/deleted.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AddItemBarComponent } from './components/add-item-bar/add-item-bar.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    AddItemBarComponent,
    TodoListComponent,
    TodoListItemComponent,
    DrawerComponent,
    AppNavBarComponent,
    HamburgerMenuComponent,
    DatePickerComponent,
    CompletedComponent,
    UncompletedComponent,
    DeletedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'completed', component: CompletedComponent },
      { path: 'uncompleted', component: UncompletedComponent },
      { path: 'deleted', component: DeletedComponent },
      { path: '', redirectTo: 'app-todo-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'app-todo-list', pathMatch: 'full' }
    ]),
    MatSidenavModule,
    MatInputModule,
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
