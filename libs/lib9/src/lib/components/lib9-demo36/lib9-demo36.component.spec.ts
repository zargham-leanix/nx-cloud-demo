import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo36Component } from './lib9-demo36.component';

describe('Lib9Demo36Component', () => {
  let component: Lib9Demo36Component;
  let fixture: ComponentFixture<Lib9Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
