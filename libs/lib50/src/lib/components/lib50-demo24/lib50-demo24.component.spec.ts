import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo24Component } from './lib50-demo24.component';

describe('Lib50Demo24Component', () => {
  let component: Lib50Demo24Component;
  let fixture: ComponentFixture<Lib50Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
