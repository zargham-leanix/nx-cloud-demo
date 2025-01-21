import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo35Component } from './lib16-demo35.component';

describe('Lib16Demo35Component', () => {
  let component: Lib16Demo35Component;
  let fixture: ComponentFixture<Lib16Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
