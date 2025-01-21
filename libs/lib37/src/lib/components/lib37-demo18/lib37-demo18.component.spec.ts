import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo18Component } from './lib37-demo18.component';

describe('Lib37Demo18Component', () => {
  let component: Lib37Demo18Component;
  let fixture: ComponentFixture<Lib37Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
