import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo24Component } from './lib33-demo24.component';

describe('Lib33Demo24Component', () => {
  let component: Lib33Demo24Component;
  let fixture: ComponentFixture<Lib33Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
