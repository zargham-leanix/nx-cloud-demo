import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo13Component } from './lib37-demo13.component';

describe('Lib37Demo13Component', () => {
  let component: Lib37Demo13Component;
  let fixture: ComponentFixture<Lib37Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
