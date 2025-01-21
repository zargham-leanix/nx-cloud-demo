import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo28Component } from './lib99-demo28.component';

describe('Lib99Demo28Component', () => {
  let component: Lib99Demo28Component;
  let fixture: ComponentFixture<Lib99Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
