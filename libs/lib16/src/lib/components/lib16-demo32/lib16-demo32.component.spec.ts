import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo32Component } from './lib16-demo32.component';

describe('Lib16Demo32Component', () => {
  let component: Lib16Demo32Component;
  let fixture: ComponentFixture<Lib16Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
