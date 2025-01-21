import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo41Component } from './lib37-demo41.component';

describe('Lib37Demo41Component', () => {
  let component: Lib37Demo41Component;
  let fixture: ComponentFixture<Lib37Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
