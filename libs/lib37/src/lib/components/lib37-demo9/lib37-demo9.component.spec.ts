import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo9Component } from './lib37-demo9.component';

describe('Lib37Demo9Component', () => {
  let component: Lib37Demo9Component;
  let fixture: ComponentFixture<Lib37Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
