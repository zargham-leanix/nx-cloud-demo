import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo24Component } from './lib28-demo24.component';

describe('Lib28Demo24Component', () => {
  let component: Lib28Demo24Component;
  let fixture: ComponentFixture<Lib28Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
