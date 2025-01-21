import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo28Component } from './lib94-demo28.component';

describe('Lib94Demo28Component', () => {
  let component: Lib94Demo28Component;
  let fixture: ComponentFixture<Lib94Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
