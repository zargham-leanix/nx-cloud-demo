import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo20Component } from './lib37-demo20.component';

describe('Lib37Demo20Component', () => {
  let component: Lib37Demo20Component;
  let fixture: ComponentFixture<Lib37Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
