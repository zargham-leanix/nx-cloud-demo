import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo36Component } from './lib87-demo36.component';

describe('Lib87Demo36Component', () => {
  let component: Lib87Demo36Component;
  let fixture: ComponentFixture<Lib87Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
