import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo32Component } from './lib37-demo32.component';

describe('Lib37Demo32Component', () => {
  let component: Lib37Demo32Component;
  let fixture: ComponentFixture<Lib37Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
