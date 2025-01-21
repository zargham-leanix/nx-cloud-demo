import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo28Component } from './lib57-demo28.component';

describe('Lib57Demo28Component', () => {
  let component: Lib57Demo28Component;
  let fixture: ComponentFixture<Lib57Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
