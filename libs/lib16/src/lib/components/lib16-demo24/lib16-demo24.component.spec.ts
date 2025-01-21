import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo24Component } from './lib16-demo24.component';

describe('Lib16Demo24Component', () => {
  let component: Lib16Demo24Component;
  let fixture: ComponentFixture<Lib16Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
