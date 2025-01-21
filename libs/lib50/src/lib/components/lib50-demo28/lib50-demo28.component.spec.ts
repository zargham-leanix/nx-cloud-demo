import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo28Component } from './lib50-demo28.component';

describe('Lib50Demo28Component', () => {
  let component: Lib50Demo28Component;
  let fixture: ComponentFixture<Lib50Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
