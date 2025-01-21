import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo28Component } from './lib41-demo28.component';

describe('Lib41Demo28Component', () => {
  let component: Lib41Demo28Component;
  let fixture: ComponentFixture<Lib41Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
