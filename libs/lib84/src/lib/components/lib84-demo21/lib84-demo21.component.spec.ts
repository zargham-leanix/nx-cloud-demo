import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo21Component } from './lib84-demo21.component';

describe('Lib84Demo21Component', () => {
  let component: Lib84Demo21Component;
  let fixture: ComponentFixture<Lib84Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
