import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo28Component } from './lib8-demo28.component';

describe('Lib8Demo28Component', () => {
  let component: Lib8Demo28Component;
  let fixture: ComponentFixture<Lib8Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
