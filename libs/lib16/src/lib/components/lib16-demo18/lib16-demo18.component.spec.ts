import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo18Component } from './lib16-demo18.component';

describe('Lib16Demo18Component', () => {
  let component: Lib16Demo18Component;
  let fixture: ComponentFixture<Lib16Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
