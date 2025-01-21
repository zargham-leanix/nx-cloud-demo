import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo28Component } from './lib27-demo28.component';

describe('Lib27Demo28Component', () => {
  let component: Lib27Demo28Component;
  let fixture: ComponentFixture<Lib27Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
