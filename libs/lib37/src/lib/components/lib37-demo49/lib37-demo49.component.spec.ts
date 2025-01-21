import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo49Component } from './lib37-demo49.component';

describe('Lib37Demo49Component', () => {
  let component: Lib37Demo49Component;
  let fixture: ComponentFixture<Lib37Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
