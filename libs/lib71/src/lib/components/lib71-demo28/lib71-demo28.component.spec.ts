import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo28Component } from './lib71-demo28.component';

describe('Lib71Demo28Component', () => {
  let component: Lib71Demo28Component;
  let fixture: ComponentFixture<Lib71Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
