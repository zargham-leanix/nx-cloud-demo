import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo28Component } from './lib63-demo28.component';

describe('Lib63Demo28Component', () => {
  let component: Lib63Demo28Component;
  let fixture: ComponentFixture<Lib63Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
