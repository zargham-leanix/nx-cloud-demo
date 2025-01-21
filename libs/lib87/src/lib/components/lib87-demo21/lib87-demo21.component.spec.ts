import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo21Component } from './lib87-demo21.component';

describe('Lib87Demo21Component', () => {
  let component: Lib87Demo21Component;
  let fixture: ComponentFixture<Lib87Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
