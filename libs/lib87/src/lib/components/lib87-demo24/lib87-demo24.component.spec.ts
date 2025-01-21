import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo24Component } from './lib87-demo24.component';

describe('Lib87Demo24Component', () => {
  let component: Lib87Demo24Component;
  let fixture: ComponentFixture<Lib87Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
