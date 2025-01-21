import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo28Component } from './lib36-demo28.component';

describe('Lib36Demo28Component', () => {
  let component: Lib36Demo28Component;
  let fixture: ComponentFixture<Lib36Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
