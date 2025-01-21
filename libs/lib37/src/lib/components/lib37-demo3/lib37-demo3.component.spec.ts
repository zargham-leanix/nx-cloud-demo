import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo3Component } from './lib37-demo3.component';

describe('Lib37Demo3Component', () => {
  let component: Lib37Demo3Component;
  let fixture: ComponentFixture<Lib37Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
