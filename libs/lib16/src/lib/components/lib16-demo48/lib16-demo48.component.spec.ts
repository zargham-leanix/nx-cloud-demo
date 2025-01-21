import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo48Component } from './lib16-demo48.component';

describe('Lib16Demo48Component', () => {
  let component: Lib16Demo48Component;
  let fixture: ComponentFixture<Lib16Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
