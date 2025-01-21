import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo0Component } from './lib16-demo0.component';

describe('Lib16Demo0Component', () => {
  let component: Lib16Demo0Component;
  let fixture: ComponentFixture<Lib16Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
