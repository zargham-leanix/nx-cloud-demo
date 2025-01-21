import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo21Component } from './lib58-demo21.component';

describe('Lib58Demo21Component', () => {
  let component: Lib58Demo21Component;
  let fixture: ComponentFixture<Lib58Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
