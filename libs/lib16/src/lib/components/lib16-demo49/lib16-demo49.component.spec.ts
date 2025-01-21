import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo49Component } from './lib16-demo49.component';

describe('Lib16Demo49Component', () => {
  let component: Lib16Demo49Component;
  let fixture: ComponentFixture<Lib16Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
