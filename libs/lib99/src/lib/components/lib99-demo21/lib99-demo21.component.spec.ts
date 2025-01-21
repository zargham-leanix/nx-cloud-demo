import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo21Component } from './lib99-demo21.component';

describe('Lib99Demo21Component', () => {
  let component: Lib99Demo21Component;
  let fixture: ComponentFixture<Lib99Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
