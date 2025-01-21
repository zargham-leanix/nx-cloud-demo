import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo36Component } from './lib66-demo36.component';

describe('Lib66Demo36Component', () => {
  let component: Lib66Demo36Component;
  let fixture: ComponentFixture<Lib66Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
