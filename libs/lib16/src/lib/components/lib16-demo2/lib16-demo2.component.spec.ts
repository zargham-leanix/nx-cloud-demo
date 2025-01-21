import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo2Component } from './lib16-demo2.component';

describe('Lib16Demo2Component', () => {
  let component: Lib16Demo2Component;
  let fixture: ComponentFixture<Lib16Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
