import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo28Component } from './lib73-demo28.component';

describe('Lib73Demo28Component', () => {
  let component: Lib73Demo28Component;
  let fixture: ComponentFixture<Lib73Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
