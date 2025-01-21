import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo24Component } from './lib4-demo24.component';

describe('Lib4Demo24Component', () => {
  let component: Lib4Demo24Component;
  let fixture: ComponentFixture<Lib4Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
