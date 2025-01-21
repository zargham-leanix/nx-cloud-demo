import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo28Component } from './lib95-demo28.component';

describe('Lib95Demo28Component', () => {
  let component: Lib95Demo28Component;
  let fixture: ComponentFixture<Lib95Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
