import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo24Component } from './lib100-demo24.component';

describe('Lib100Demo24Component', () => {
  let component: Lib100Demo24Component;
  let fixture: ComponentFixture<Lib100Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
