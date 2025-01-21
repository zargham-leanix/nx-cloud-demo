import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo21Component } from './lib57-demo21.component';

describe('Lib57Demo21Component', () => {
  let component: Lib57Demo21Component;
  let fixture: ComponentFixture<Lib57Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
