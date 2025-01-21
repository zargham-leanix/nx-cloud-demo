import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo21Component } from './lib26-demo21.component';

describe('Lib26Demo21Component', () => {
  let component: Lib26Demo21Component;
  let fixture: ComponentFixture<Lib26Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
