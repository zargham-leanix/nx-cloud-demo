import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo36Component } from './lib20-demo36.component';

describe('Lib20Demo36Component', () => {
  let component: Lib20Demo36Component;
  let fixture: ComponentFixture<Lib20Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
