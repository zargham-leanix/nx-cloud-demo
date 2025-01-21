import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo28Component } from './lib12-demo28.component';

describe('Lib12Demo28Component', () => {
  let component: Lib12Demo28Component;
  let fixture: ComponentFixture<Lib12Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
