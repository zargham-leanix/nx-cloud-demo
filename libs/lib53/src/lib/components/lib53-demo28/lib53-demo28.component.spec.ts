import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo28Component } from './lib53-demo28.component';

describe('Lib53Demo28Component', () => {
  let component: Lib53Demo28Component;
  let fixture: ComponentFixture<Lib53Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
