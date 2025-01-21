import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo28Component } from './lib10-demo28.component';

describe('Lib10Demo28Component', () => {
  let component: Lib10Demo28Component;
  let fixture: ComponentFixture<Lib10Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
