import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo28Component } from './lib49-demo28.component';

describe('Lib49Demo28Component', () => {
  let component: Lib49Demo28Component;
  let fixture: ComponentFixture<Lib49Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
