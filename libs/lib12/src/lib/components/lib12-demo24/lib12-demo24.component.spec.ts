import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo24Component } from './lib12-demo24.component';

describe('Lib12Demo24Component', () => {
  let component: Lib12Demo24Component;
  let fixture: ComponentFixture<Lib12Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
