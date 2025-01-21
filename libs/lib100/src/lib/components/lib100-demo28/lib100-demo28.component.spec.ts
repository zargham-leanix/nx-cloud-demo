import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo28Component } from './lib100-demo28.component';

describe('Lib100Demo28Component', () => {
  let component: Lib100Demo28Component;
  let fixture: ComponentFixture<Lib100Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
