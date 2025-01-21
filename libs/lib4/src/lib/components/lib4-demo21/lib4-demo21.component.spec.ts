import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo21Component } from './lib4-demo21.component';

describe('Lib4Demo21Component', () => {
  let component: Lib4Demo21Component;
  let fixture: ComponentFixture<Lib4Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
