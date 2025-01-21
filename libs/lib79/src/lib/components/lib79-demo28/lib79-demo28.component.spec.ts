import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo28Component } from './lib79-demo28.component';

describe('Lib79Demo28Component', () => {
  let component: Lib79Demo28Component;
  let fixture: ComponentFixture<Lib79Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
