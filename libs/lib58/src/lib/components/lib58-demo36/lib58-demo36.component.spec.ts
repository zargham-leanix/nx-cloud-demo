import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo36Component } from './lib58-demo36.component';

describe('Lib58Demo36Component', () => {
  let component: Lib58Demo36Component;
  let fixture: ComponentFixture<Lib58Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
