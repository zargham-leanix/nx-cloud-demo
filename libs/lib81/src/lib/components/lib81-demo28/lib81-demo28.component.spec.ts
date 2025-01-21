import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo28Component } from './lib81-demo28.component';

describe('Lib81Demo28Component', () => {
  let component: Lib81Demo28Component;
  let fixture: ComponentFixture<Lib81Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
