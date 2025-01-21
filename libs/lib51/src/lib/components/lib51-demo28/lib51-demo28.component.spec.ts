import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo28Component } from './lib51-demo28.component';

describe('Lib51Demo28Component', () => {
  let component: Lib51Demo28Component;
  let fixture: ComponentFixture<Lib51Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
