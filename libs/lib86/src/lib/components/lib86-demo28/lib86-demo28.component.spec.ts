import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo28Component } from './lib86-demo28.component';

describe('Lib86Demo28Component', () => {
  let component: Lib86Demo28Component;
  let fixture: ComponentFixture<Lib86Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
