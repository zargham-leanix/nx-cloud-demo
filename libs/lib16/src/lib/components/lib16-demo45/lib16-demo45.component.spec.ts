import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo45Component } from './lib16-demo45.component';

describe('Lib16Demo45Component', () => {
  let component: Lib16Demo45Component;
  let fixture: ComponentFixture<Lib16Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
