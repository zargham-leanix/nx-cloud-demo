import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo28Component } from './lib98-demo28.component';

describe('Lib98Demo28Component', () => {
  let component: Lib98Demo28Component;
  let fixture: ComponentFixture<Lib98Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
