import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo7Component } from './lib37-demo7.component';

describe('Lib37Demo7Component', () => {
  let component: Lib37Demo7Component;
  let fixture: ComponentFixture<Lib37Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
