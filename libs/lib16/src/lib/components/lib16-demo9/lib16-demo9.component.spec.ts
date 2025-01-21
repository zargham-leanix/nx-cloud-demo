import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo9Component } from './lib16-demo9.component';

describe('Lib16Demo9Component', () => {
  let component: Lib16Demo9Component;
  let fixture: ComponentFixture<Lib16Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
