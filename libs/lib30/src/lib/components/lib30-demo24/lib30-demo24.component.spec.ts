import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo24Component } from './lib30-demo24.component';

describe('Lib30Demo24Component', () => {
  let component: Lib30Demo24Component;
  let fixture: ComponentFixture<Lib30Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
