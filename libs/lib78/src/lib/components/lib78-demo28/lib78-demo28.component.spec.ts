import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo28Component } from './lib78-demo28.component';

describe('Lib78Demo28Component', () => {
  let component: Lib78Demo28Component;
  let fixture: ComponentFixture<Lib78Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
