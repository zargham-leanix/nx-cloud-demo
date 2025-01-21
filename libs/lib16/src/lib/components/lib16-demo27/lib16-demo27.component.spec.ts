import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo27Component } from './lib16-demo27.component';

describe('Lib16Demo27Component', () => {
  let component: Lib16Demo27Component;
  let fixture: ComponentFixture<Lib16Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
