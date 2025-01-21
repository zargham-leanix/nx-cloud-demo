import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo28Component } from './lib62-demo28.component';

describe('Lib62Demo28Component', () => {
  let component: Lib62Demo28Component;
  let fixture: ComponentFixture<Lib62Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
