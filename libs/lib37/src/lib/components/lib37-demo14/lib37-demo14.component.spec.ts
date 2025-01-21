import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo14Component } from './lib37-demo14.component';

describe('Lib37Demo14Component', () => {
  let component: Lib37Demo14Component;
  let fixture: ComponentFixture<Lib37Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
