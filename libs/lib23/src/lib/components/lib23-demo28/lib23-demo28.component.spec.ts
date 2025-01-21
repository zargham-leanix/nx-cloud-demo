import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo28Component } from './lib23-demo28.component';

describe('Lib23Demo28Component', () => {
  let component: Lib23Demo28Component;
  let fixture: ComponentFixture<Lib23Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
