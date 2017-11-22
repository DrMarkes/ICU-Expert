import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QSofaComponent } from './q-sofa.component';

describe('QSofaComponent', () => {
  let component: QSofaComponent;
  let fixture: ComponentFixture<QSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
