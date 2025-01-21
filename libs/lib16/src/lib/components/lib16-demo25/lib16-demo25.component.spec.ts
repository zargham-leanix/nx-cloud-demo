import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo25Component } from './lib16-demo25.component';

describe('Lib16Demo25Component', () => {
  let component: Lib16Demo25Component;
  let fixture: ComponentFixture<Lib16Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
