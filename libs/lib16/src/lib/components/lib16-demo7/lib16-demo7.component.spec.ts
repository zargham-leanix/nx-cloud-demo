import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo7Component } from './lib16-demo7.component';

describe('Lib16Demo7Component', () => {
  let component: Lib16Demo7Component;
  let fixture: ComponentFixture<Lib16Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
