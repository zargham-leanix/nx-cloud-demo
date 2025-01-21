import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo28Component } from './lib20-demo28.component';

describe('Lib20Demo28Component', () => {
  let component: Lib20Demo28Component;
  let fixture: ComponentFixture<Lib20Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
