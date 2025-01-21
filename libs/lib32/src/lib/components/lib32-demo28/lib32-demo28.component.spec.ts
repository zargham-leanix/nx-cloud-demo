import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo28Component } from './lib32-demo28.component';

describe('Lib32Demo28Component', () => {
  let component: Lib32Demo28Component;
  let fixture: ComponentFixture<Lib32Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
