import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo0Component } from './lib37-demo0.component';

describe('Lib37Demo0Component', () => {
  let component: Lib37Demo0Component;
  let fixture: ComponentFixture<Lib37Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
