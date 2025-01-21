import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo28Component } from './lib42-demo28.component';

describe('Lib42Demo28Component', () => {
  let component: Lib42Demo28Component;
  let fixture: ComponentFixture<Lib42Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
