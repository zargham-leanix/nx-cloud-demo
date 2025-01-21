import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo28Component } from './lib67-demo28.component';

describe('Lib67Demo28Component', () => {
  let component: Lib67Demo28Component;
  let fixture: ComponentFixture<Lib67Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
