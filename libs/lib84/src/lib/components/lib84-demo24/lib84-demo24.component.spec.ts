import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo24Component } from './lib84-demo24.component';

describe('Lib84Demo24Component', () => {
  let component: Lib84Demo24Component;
  let fixture: ComponentFixture<Lib84Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
