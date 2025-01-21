import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo45Component } from './lib37-demo45.component';

describe('Lib37Demo45Component', () => {
  let component: Lib37Demo45Component;
  let fixture: ComponentFixture<Lib37Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
