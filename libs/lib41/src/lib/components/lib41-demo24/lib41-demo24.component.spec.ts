import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo24Component } from './lib41-demo24.component';

describe('Lib41Demo24Component', () => {
  let component: Lib41Demo24Component;
  let fixture: ComponentFixture<Lib41Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
