import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo44Component } from './lib16-demo44.component';

describe('Lib16Demo44Component', () => {
  let component: Lib16Demo44Component;
  let fixture: ComponentFixture<Lib16Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
