import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo33Component } from './lib37-demo33.component';

describe('Lib37Demo33Component', () => {
  let component: Lib37Demo33Component;
  let fixture: ComponentFixture<Lib37Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
