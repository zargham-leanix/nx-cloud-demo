import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo40Component } from './lib16-demo40.component';

describe('Lib16Demo40Component', () => {
  let component: Lib16Demo40Component;
  let fixture: ComponentFixture<Lib16Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
