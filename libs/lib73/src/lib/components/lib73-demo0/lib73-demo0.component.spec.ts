import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo0Component } from './lib73-demo0.component';

describe('Lib73Demo0Component', () => {
  let component: Lib73Demo0Component;
  let fixture: ComponentFixture<Lib73Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
