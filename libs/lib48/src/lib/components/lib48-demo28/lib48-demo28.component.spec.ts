import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo28Component } from './lib48-demo28.component';

describe('Lib48Demo28Component', () => {
  let component: Lib48Demo28Component;
  let fixture: ComponentFixture<Lib48Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
