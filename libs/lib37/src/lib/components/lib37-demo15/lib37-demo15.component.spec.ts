import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo15Component } from './lib37-demo15.component';

describe('Lib37Demo15Component', () => {
  let component: Lib37Demo15Component;
  let fixture: ComponentFixture<Lib37Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
