import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo21Component } from './lib18-demo21.component';

describe('Lib18Demo21Component', () => {
  let component: Lib18Demo21Component;
  let fixture: ComponentFixture<Lib18Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
