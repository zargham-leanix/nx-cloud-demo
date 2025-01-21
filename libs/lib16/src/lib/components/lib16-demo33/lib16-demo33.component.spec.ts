import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo33Component } from './lib16-demo33.component';

describe('Lib16Demo33Component', () => {
  let component: Lib16Demo33Component;
  let fixture: ComponentFixture<Lib16Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
