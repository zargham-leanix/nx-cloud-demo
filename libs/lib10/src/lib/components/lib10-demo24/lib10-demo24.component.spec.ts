import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo24Component } from './lib10-demo24.component';

describe('Lib10Demo24Component', () => {
  let component: Lib10Demo24Component;
  let fixture: ComponentFixture<Lib10Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
