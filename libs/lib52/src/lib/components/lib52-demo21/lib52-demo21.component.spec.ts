import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo21Component } from './lib52-demo21.component';

describe('Lib52Demo21Component', () => {
  let component: Lib52Demo21Component;
  let fixture: ComponentFixture<Lib52Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
