import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo28Component } from './lib72-demo28.component';

describe('Lib72Demo28Component', () => {
  let component: Lib72Demo28Component;
  let fixture: ComponentFixture<Lib72Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
