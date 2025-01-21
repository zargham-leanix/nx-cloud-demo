import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo28Component } from './lib47-demo28.component';

describe('Lib47Demo28Component', () => {
  let component: Lib47Demo28Component;
  let fixture: ComponentFixture<Lib47Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
