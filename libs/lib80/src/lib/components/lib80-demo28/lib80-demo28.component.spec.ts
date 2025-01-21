import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo28Component } from './lib80-demo28.component';

describe('Lib80Demo28Component', () => {
  let component: Lib80Demo28Component;
  let fixture: ComponentFixture<Lib80Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
