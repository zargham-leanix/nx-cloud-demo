import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo29Component } from './lib16-demo29.component';

describe('Lib16Demo29Component', () => {
  let component: Lib16Demo29Component;
  let fixture: ComponentFixture<Lib16Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
