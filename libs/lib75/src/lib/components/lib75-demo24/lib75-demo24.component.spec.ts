import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo24Component } from './lib75-demo24.component';

describe('Lib75Demo24Component', () => {
  let component: Lib75Demo24Component;
  let fixture: ComponentFixture<Lib75Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
