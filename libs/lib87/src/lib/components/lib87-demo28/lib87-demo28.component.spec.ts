import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo28Component } from './lib87-demo28.component';

describe('Lib87Demo28Component', () => {
  let component: Lib87Demo28Component;
  let fixture: ComponentFixture<Lib87Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
