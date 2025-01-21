import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo17Component } from './lib37-demo17.component';

describe('Lib37Demo17Component', () => {
  let component: Lib37Demo17Component;
  let fixture: ComponentFixture<Lib37Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
