import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo28Component } from './lib24-demo28.component';

describe('Lib24Demo28Component', () => {
  let component: Lib24Demo28Component;
  let fixture: ComponentFixture<Lib24Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
