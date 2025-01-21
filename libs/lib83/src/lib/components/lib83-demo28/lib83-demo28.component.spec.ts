import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo28Component } from './lib83-demo28.component';

describe('Lib83Demo28Component', () => {
  let component: Lib83Demo28Component;
  let fixture: ComponentFixture<Lib83Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
