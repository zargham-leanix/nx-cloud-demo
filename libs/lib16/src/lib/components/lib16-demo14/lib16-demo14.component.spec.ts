import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo14Component } from './lib16-demo14.component';

describe('Lib16Demo14Component', () => {
  let component: Lib16Demo14Component;
  let fixture: ComponentFixture<Lib16Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
