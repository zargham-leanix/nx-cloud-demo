import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo12Component } from './lib37-demo12.component';

describe('Lib37Demo12Component', () => {
  let component: Lib37Demo12Component;
  let fixture: ComponentFixture<Lib37Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
