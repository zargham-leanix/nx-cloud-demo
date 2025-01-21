import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo28Component } from './lib4-demo28.component';

describe('Lib4Demo28Component', () => {
  let component: Lib4Demo28Component;
  let fixture: ComponentFixture<Lib4Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
