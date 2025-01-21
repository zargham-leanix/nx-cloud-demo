import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo28Component } from './lib33-demo28.component';

describe('Lib33Demo28Component', () => {
  let component: Lib33Demo28Component;
  let fixture: ComponentFixture<Lib33Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
