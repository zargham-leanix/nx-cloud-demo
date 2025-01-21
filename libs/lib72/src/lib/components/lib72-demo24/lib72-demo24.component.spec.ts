import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo24Component } from './lib72-demo24.component';

describe('Lib72Demo24Component', () => {
  let component: Lib72Demo24Component;
  let fixture: ComponentFixture<Lib72Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
