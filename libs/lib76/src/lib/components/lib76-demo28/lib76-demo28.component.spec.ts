import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo28Component } from './lib76-demo28.component';

describe('Lib76Demo28Component', () => {
  let component: Lib76Demo28Component;
  let fixture: ComponentFixture<Lib76Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
