import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo8Component } from './lib16-demo8.component';

describe('Lib16Demo8Component', () => {
  let component: Lib16Demo8Component;
  let fixture: ComponentFixture<Lib16Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
