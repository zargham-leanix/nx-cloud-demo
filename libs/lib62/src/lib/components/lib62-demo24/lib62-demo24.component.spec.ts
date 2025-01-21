import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo24Component } from './lib62-demo24.component';

describe('Lib62Demo24Component', () => {
  let component: Lib62Demo24Component;
  let fixture: ComponentFixture<Lib62Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
