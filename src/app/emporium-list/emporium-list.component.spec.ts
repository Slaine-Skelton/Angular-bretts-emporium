import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmporiumListComponent } from './emporium-list.component';

describe('EmporiumListComponent', () => {
  let component: EmporiumListComponent;
  let fixture: ComponentFixture<EmporiumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmporiumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmporiumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
