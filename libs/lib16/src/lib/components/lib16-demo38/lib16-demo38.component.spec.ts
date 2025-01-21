import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo38Component } from './lib16-demo38.component';

describe('Lib16Demo38Component', () => {
  let component: Lib16Demo38Component;
  let fixture: ComponentFixture<Lib16Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
