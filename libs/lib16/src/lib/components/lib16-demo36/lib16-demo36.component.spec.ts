import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo36Component } from './lib16-demo36.component';

describe('Lib16Demo36Component', () => {
  let component: Lib16Demo36Component;
  let fixture: ComponentFixture<Lib16Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
