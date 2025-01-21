import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo11Component } from './lib16-demo11.component';

describe('Lib16Demo11Component', () => {
  let component: Lib16Demo11Component;
  let fixture: ComponentFixture<Lib16Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
