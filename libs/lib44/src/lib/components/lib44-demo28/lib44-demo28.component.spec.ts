import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo28Component } from './lib44-demo28.component';

describe('Lib44Demo28Component', () => {
  let component: Lib44Demo28Component;
  let fixture: ComponentFixture<Lib44Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
