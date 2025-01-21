import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo24Component } from './lib93-demo24.component';

describe('Lib93Demo24Component', () => {
  let component: Lib93Demo24Component;
  let fixture: ComponentFixture<Lib93Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
