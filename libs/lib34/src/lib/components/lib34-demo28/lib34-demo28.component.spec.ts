import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo28Component } from './lib34-demo28.component';

describe('Lib34Demo28Component', () => {
  let component: Lib34Demo28Component;
  let fixture: ComponentFixture<Lib34Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
