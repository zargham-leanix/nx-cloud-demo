import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo21Component } from './lib62-demo21.component';

describe('Lib62Demo21Component', () => {
  let component: Lib62Demo21Component;
  let fixture: ComponentFixture<Lib62Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
