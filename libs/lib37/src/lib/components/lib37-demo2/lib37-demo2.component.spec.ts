import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo2Component } from './lib37-demo2.component';

describe('Lib37Demo2Component', () => {
  let component: Lib37Demo2Component;
  let fixture: ComponentFixture<Lib37Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
