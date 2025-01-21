import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo21Component } from './lib73-demo21.component';

describe('Lib73Demo21Component', () => {
  let component: Lib73Demo21Component;
  let fixture: ComponentFixture<Lib73Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
