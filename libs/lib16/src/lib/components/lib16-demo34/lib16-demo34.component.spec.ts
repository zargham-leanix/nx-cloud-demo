import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo34Component } from './lib16-demo34.component';

describe('Lib16Demo34Component', () => {
  let component: Lib16Demo34Component;
  let fixture: ComponentFixture<Lib16Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
