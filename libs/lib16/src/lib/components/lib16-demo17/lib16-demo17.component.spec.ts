import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo17Component } from './lib16-demo17.component';

describe('Lib16Demo17Component', () => {
  let component: Lib16Demo17Component;
  let fixture: ComponentFixture<Lib16Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
