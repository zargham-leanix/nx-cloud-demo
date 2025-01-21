import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo28Component } from './lib88-demo28.component';

describe('Lib88Demo28Component', () => {
  let component: Lib88Demo28Component;
  let fixture: ComponentFixture<Lib88Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
