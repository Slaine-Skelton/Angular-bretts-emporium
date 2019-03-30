import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNameComponent } from './library-name.component';

describe('LibraryNameComponent', () => {
  let component: LibraryNameComponent;
  let fixture: ComponentFixture<LibraryNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
