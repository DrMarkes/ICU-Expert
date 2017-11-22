import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepsisComponent } from './sepsis.component';

describe('SepsisComponent', () => {
  let component: SepsisComponent;
  let fixture: ComponentFixture<SepsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
