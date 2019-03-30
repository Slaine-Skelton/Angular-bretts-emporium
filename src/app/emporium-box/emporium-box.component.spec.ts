import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmporiumBoxComponent } from './emporium-box.component';

describe('EmporiumBoxComponent', () => {
  let component: EmporiumBoxComponent;
  let fixture: ComponentFixture<EmporiumBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmporiumBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmporiumBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
