import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo47Component } from './lib16-demo47.component';

describe('Lib16Demo47Component', () => {
  let component: Lib16Demo47Component;
  let fixture: ComponentFixture<Lib16Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
