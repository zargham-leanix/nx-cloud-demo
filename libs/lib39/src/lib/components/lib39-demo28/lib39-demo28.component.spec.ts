import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo28Component } from './lib39-demo28.component';

describe('Lib39Demo28Component', () => {
  let component: Lib39Demo28Component;
  let fixture: ComponentFixture<Lib39Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
