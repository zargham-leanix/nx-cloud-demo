import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo21Component } from './lib95-demo21.component';

describe('Lib95Demo21Component', () => {
  let component: Lib95Demo21Component;
  let fixture: ComponentFixture<Lib95Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
