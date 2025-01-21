import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo36Component } from './lib18-demo36.component';

describe('Lib18Demo36Component', () => {
  let component: Lib18Demo36Component;
  let fixture: ComponentFixture<Lib18Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
