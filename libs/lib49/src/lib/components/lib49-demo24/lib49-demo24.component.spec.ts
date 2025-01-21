import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo24Component } from './lib49-demo24.component';

describe('Lib49Demo24Component', () => {
  let component: Lib49Demo24Component;
  let fixture: ComponentFixture<Lib49Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
