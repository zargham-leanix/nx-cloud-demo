import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo28Component } from './lib61-demo28.component';

describe('Lib61Demo28Component', () => {
  let component: Lib61Demo28Component;
  let fixture: ComponentFixture<Lib61Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
