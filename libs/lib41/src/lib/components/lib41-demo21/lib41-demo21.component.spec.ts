import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo21Component } from './lib41-demo21.component';

describe('Lib41Demo21Component', () => {
  let component: Lib41Demo21Component;
  let fixture: ComponentFixture<Lib41Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
