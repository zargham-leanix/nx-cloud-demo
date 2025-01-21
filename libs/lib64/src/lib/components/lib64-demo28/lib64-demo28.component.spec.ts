import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo28Component } from './lib64-demo28.component';

describe('Lib64Demo28Component', () => {
  let component: Lib64Demo28Component;
  let fixture: ComponentFixture<Lib64Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
