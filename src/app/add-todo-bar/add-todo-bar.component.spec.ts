import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoBarComponent } from './add-todo-bar.component';

describe('AddTodoBarComponent', () => {
  let component: AddTodoBarComponent;
  let fixture: ComponentFixture<AddTodoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
