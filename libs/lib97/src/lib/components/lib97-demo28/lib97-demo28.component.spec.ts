import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo28Component } from './lib97-demo28.component';

describe('Lib97Demo28Component', () => {
  let component: Lib97Demo28Component;
  let fixture: ComponentFixture<Lib97Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
