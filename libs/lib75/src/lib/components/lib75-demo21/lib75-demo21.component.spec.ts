import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo21Component } from './lib75-demo21.component';

describe('Lib75Demo21Component', () => {
  let component: Lib75Demo21Component;
  let fixture: ComponentFixture<Lib75Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
