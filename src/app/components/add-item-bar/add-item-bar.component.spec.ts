import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemBarComponent } from './add-item-bar.component';

describe('AddItemBarComponent', () => {
  let component: AddItemBarComponent;
  let fixture: ComponentFixture<AddItemBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
