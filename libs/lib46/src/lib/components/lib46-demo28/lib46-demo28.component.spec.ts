import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo28Component } from './lib46-demo28.component';

describe('Lib46Demo28Component', () => {
  let component: Lib46Demo28Component;
  let fixture: ComponentFixture<Lib46Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
