import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserpassComponent } from './change-userpass.component';

describe('ChangeUserpassComponent', () => {
  let component: ChangeUserpassComponent;
  let fixture: ComponentFixture<ChangeUserpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUserpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeUserpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
