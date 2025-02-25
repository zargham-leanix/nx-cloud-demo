import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo21Component } from './lib20-demo21.component';

describe('Lib20Demo21Component', () => {
  let component: Lib20Demo21Component;
  let fixture: ComponentFixture<Lib20Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
