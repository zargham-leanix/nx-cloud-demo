import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo28Component } from './lib5-demo28.component';

describe('Lib5Demo28Component', () => {
  let component: Lib5Demo28Component;
  let fixture: ComponentFixture<Lib5Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
