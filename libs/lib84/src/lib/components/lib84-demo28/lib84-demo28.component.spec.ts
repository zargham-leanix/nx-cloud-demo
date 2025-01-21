import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo28Component } from './lib84-demo28.component';

describe('Lib84Demo28Component', () => {
  let component: Lib84Demo28Component;
  let fixture: ComponentFixture<Lib84Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
