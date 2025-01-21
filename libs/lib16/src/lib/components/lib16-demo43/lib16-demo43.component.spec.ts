import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo43Component } from './lib16-demo43.component';

describe('Lib16Demo43Component', () => {
  let component: Lib16Demo43Component;
  let fixture: ComponentFixture<Lib16Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
