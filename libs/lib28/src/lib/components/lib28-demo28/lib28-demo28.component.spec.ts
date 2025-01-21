import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo28Component } from './lib28-demo28.component';

describe('Lib28Demo28Component', () => {
  let component: Lib28Demo28Component;
  let fixture: ComponentFixture<Lib28Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
