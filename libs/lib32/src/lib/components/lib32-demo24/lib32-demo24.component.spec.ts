import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo24Component } from './lib32-demo24.component';

describe('Lib32Demo24Component', () => {
  let component: Lib32Demo24Component;
  let fixture: ComponentFixture<Lib32Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
