import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo28Component } from './lib74-demo28.component';

describe('Lib74Demo28Component', () => {
  let component: Lib74Demo28Component;
  let fixture: ComponentFixture<Lib74Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
