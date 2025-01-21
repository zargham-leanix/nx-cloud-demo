import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo28Component } from './lib55-demo28.component';

describe('Lib55Demo28Component', () => {
  let component: Lib55Demo28Component;
  let fixture: ComponentFixture<Lib55Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
