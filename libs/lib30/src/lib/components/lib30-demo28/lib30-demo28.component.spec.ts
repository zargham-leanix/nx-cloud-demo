import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo28Component } from './lib30-demo28.component';

describe('Lib30Demo28Component', () => {
  let component: Lib30Demo28Component;
  let fixture: ComponentFixture<Lib30Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
