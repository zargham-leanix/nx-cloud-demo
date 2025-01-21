import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo21Component } from './lib16-demo21.component';

describe('Lib16Demo21Component', () => {
  let component: Lib16Demo21Component;
  let fixture: ComponentFixture<Lib16Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
