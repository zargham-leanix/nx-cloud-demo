import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo21Component } from './lib47-demo21.component';

describe('Lib47Demo21Component', () => {
  let component: Lib47Demo21Component;
  let fixture: ComponentFixture<Lib47Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
