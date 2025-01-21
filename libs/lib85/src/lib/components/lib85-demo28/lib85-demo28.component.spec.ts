import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo28Component } from './lib85-demo28.component';

describe('Lib85Demo28Component', () => {
  let component: Lib85Demo28Component;
  let fixture: ComponentFixture<Lib85Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
