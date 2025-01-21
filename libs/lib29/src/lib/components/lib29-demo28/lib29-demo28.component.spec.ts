import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo28Component } from './lib29-demo28.component';

describe('Lib29Demo28Component', () => {
  let component: Lib29Demo28Component;
  let fixture: ComponentFixture<Lib29Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
