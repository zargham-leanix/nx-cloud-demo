import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo6Component } from './lib37-demo6.component';

describe('Lib37Demo6Component', () => {
  let component: Lib37Demo6Component;
  let fixture: ComponentFixture<Lib37Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
