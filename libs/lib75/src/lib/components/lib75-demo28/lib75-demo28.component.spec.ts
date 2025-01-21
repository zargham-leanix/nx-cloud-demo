import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo28Component } from './lib75-demo28.component';

describe('Lib75Demo28Component', () => {
  let component: Lib75Demo28Component;
  let fixture: ComponentFixture<Lib75Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
