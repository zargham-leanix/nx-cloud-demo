import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo24Component } from './lib20-demo24.component';

describe('Lib20Demo24Component', () => {
  let component: Lib20Demo24Component;
  let fixture: ComponentFixture<Lib20Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
