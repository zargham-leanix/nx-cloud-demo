import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo11Component } from './lib37-demo11.component';

describe('Lib37Demo11Component', () => {
  let component: Lib37Demo11Component;
  let fixture: ComponentFixture<Lib37Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
