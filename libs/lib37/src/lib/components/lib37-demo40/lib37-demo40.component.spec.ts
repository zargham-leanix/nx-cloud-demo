import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo40Component } from './lib37-demo40.component';

describe('Lib37Demo40Component', () => {
  let component: Lib37Demo40Component;
  let fixture: ComponentFixture<Lib37Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
