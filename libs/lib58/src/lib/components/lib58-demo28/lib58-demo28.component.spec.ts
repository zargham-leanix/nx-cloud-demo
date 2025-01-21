import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo28Component } from './lib58-demo28.component';

describe('Lib58Demo28Component', () => {
  let component: Lib58Demo28Component;
  let fixture: ComponentFixture<Lib58Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
