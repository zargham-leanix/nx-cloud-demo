import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo28Component } from './lib66-demo28.component';

describe('Lib66Demo28Component', () => {
  let component: Lib66Demo28Component;
  let fixture: ComponentFixture<Lib66Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
