import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo38Component } from './lib37-demo38.component';

describe('Lib37Demo38Component', () => {
  let component: Lib37Demo38Component;
  let fixture: ComponentFixture<Lib37Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
