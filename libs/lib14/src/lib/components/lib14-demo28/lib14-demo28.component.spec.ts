import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo28Component } from './lib14-demo28.component';

describe('Lib14Demo28Component', () => {
  let component: Lib14Demo28Component;
  let fixture: ComponentFixture<Lib14Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
