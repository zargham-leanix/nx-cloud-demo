import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo24Component } from './lib47-demo24.component';

describe('Lib47Demo24Component', () => {
  let component: Lib47Demo24Component;
  let fixture: ComponentFixture<Lib47Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
