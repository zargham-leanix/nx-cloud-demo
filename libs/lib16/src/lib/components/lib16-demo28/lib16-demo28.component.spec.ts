import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo28Component } from './lib16-demo28.component';

describe('Lib16Demo28Component', () => {
  let component: Lib16Demo28Component;
  let fixture: ComponentFixture<Lib16Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
