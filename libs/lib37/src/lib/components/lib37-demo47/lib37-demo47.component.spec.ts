import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo47Component } from './lib37-demo47.component';

describe('Lib37Demo47Component', () => {
  let component: Lib37Demo47Component;
  let fixture: ComponentFixture<Lib37Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
