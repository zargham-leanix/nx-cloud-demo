import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo24Component } from './lib56-demo24.component';

describe('Lib56Demo24Component', () => {
  let component: Lib56Demo24Component;
  let fixture: ComponentFixture<Lib56Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
