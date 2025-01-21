import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo24Component } from './lib95-demo24.component';

describe('Lib95Demo24Component', () => {
  let component: Lib95Demo24Component;
  let fixture: ComponentFixture<Lib95Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
