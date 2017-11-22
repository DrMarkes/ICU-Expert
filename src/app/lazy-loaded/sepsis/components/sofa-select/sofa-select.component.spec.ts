import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofaSelectComponent } from './sofa-select.component';

describe('SofaSelectComponent', () => {
  let component: SofaSelectComponent;
  let fixture: ComponentFixture<SofaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
