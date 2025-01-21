import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo0Component } from './lib87-demo0.component';

describe('Lib87Demo0Component', () => {
  let component: Lib87Demo0Component;
  let fixture: ComponentFixture<Lib87Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
