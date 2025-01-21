import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo24Component } from './lib18-demo24.component';

describe('Lib18Demo24Component', () => {
  let component: Lib18Demo24Component;
  let fixture: ComponentFixture<Lib18Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
