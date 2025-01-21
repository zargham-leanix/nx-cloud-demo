import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo24Component } from './lib73-demo24.component';

describe('Lib73Demo24Component', () => {
  let component: Lib73Demo24Component;
  let fixture: ComponentFixture<Lib73Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
