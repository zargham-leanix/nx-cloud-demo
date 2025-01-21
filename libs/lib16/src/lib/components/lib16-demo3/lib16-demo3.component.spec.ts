import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo3Component } from './lib16-demo3.component';

describe('Lib16Demo3Component', () => {
  let component: Lib16Demo3Component;
  let fixture: ComponentFixture<Lib16Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
