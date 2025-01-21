import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo5Component } from './lib16-demo5.component';

describe('Lib16Demo5Component', () => {
  let component: Lib16Demo5Component;
  let fixture: ComponentFixture<Lib16Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
