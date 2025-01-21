import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo42Component } from './lib16-demo42.component';

describe('Lib16Demo42Component', () => {
  let component: Lib16Demo42Component;
  let fixture: ComponentFixture<Lib16Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
