import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo28Component } from './lib18-demo28.component';

describe('Lib18Demo28Component', () => {
  let component: Lib18Demo28Component;
  let fixture: ComponentFixture<Lib18Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
