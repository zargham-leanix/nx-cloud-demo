import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo28Component } from './lib11-demo28.component';

describe('Lib11Demo28Component', () => {
  let component: Lib11Demo28Component;
  let fixture: ComponentFixture<Lib11Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
