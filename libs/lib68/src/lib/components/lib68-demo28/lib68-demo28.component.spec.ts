import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo28Component } from './lib68-demo28.component';

describe('Lib68Demo28Component', () => {
  let component: Lib68Demo28Component;
  let fixture: ComponentFixture<Lib68Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
