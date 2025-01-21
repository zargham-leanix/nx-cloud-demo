import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo24Component } from './lib52-demo24.component';

describe('Lib52Demo24Component', () => {
  let component: Lib52Demo24Component;
  let fixture: ComponentFixture<Lib52Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
