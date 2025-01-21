import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo28Component } from './lib52-demo28.component';

describe('Lib52Demo28Component', () => {
  let component: Lib52Demo28Component;
  let fixture: ComponentFixture<Lib52Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
