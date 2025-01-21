import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo36Component } from './lib37-demo36.component';

describe('Lib37Demo36Component', () => {
  let component: Lib37Demo36Component;
  let fixture: ComponentFixture<Lib37Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
