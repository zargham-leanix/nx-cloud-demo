import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo13Component } from './lib16-demo13.component';

describe('Lib16Demo13Component', () => {
  let component: Lib16Demo13Component;
  let fixture: ComponentFixture<Lib16Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
