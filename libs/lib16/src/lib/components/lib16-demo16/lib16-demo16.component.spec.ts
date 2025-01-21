import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo16Component } from './lib16-demo16.component';

describe('Lib16Demo16Component', () => {
  let component: Lib16Demo16Component;
  let fixture: ComponentFixture<Lib16Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
