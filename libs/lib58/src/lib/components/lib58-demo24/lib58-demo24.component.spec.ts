import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo24Component } from './lib58-demo24.component';

describe('Lib58Demo24Component', () => {
  let component: Lib58Demo24Component;
  let fixture: ComponentFixture<Lib58Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
