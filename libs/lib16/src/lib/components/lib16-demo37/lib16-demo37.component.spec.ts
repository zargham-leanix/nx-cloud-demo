import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo37Component } from './lib16-demo37.component';

describe('Lib16Demo37Component', () => {
  let component: Lib16Demo37Component;
  let fixture: ComponentFixture<Lib16Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
