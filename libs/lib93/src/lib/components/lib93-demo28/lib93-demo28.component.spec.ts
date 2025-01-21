import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo28Component } from './lib93-demo28.component';

describe('Lib93Demo28Component', () => {
  let component: Lib93Demo28Component;
  let fixture: ComponentFixture<Lib93Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
