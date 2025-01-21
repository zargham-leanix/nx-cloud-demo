import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo21Component } from './lib80-demo21.component';

describe('Lib80Demo21Component', () => {
  let component: Lib80Demo21Component;
  let fixture: ComponentFixture<Lib80Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
