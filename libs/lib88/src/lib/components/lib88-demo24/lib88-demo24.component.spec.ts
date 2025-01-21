import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo24Component } from './lib88-demo24.component';

describe('Lib88Demo24Component', () => {
  let component: Lib88Demo24Component;
  let fixture: ComponentFixture<Lib88Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
