import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo1Component } from './lib37-demo1.component';

describe('Lib37Demo1Component', () => {
  let component: Lib37Demo1Component;
  let fixture: ComponentFixture<Lib37Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
