import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo4Component } from './lib37-demo4.component';

describe('Lib37Demo4Component', () => {
  let component: Lib37Demo4Component;
  let fixture: ComponentFixture<Lib37Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
