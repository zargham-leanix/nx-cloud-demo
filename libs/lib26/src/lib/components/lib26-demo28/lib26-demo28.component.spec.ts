import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo28Component } from './lib26-demo28.component';

describe('Lib26Demo28Component', () => {
  let component: Lib26Demo28Component;
  let fixture: ComponentFixture<Lib26Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
