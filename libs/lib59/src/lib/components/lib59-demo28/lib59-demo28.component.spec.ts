import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo28Component } from './lib59-demo28.component';

describe('Lib59Demo28Component', () => {
  let component: Lib59Demo28Component;
  let fixture: ComponentFixture<Lib59Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
