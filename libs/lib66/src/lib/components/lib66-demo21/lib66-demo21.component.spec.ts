import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo21Component } from './lib66-demo21.component';

describe('Lib66Demo21Component', () => {
  let component: Lib66Demo21Component;
  let fixture: ComponentFixture<Lib66Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
