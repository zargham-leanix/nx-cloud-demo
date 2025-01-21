import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo16Component } from './lib37-demo16.component';

describe('Lib37Demo16Component', () => {
  let component: Lib37Demo16Component;
  let fixture: ComponentFixture<Lib37Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
