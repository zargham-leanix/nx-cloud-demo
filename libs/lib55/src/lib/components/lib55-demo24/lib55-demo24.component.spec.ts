import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo24Component } from './lib55-demo24.component';

describe('Lib55Demo24Component', () => {
  let component: Lib55Demo24Component;
  let fixture: ComponentFixture<Lib55Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
