import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo28Component } from './lib37-demo28.component';

describe('Lib37Demo28Component', () => {
  let component: Lib37Demo28Component;
  let fixture: ComponentFixture<Lib37Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
