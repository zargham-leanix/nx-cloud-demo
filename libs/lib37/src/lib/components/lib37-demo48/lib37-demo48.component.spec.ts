import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo48Component } from './lib37-demo48.component';

describe('Lib37Demo48Component', () => {
  let component: Lib37Demo48Component;
  let fixture: ComponentFixture<Lib37Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
