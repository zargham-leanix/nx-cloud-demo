import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo28Component } from './lib25-demo28.component';

describe('Lib25Demo28Component', () => {
  let component: Lib25Demo28Component;
  let fixture: ComponentFixture<Lib25Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
