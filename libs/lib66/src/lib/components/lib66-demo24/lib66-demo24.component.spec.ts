import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo24Component } from './lib66-demo24.component';

describe('Lib66Demo24Component', () => {
  let component: Lib66Demo24Component;
  let fixture: ComponentFixture<Lib66Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
