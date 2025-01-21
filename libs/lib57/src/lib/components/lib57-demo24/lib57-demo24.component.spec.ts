import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo24Component } from './lib57-demo24.component';

describe('Lib57Demo24Component', () => {
  let component: Lib57Demo24Component;
  let fixture: ComponentFixture<Lib57Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
