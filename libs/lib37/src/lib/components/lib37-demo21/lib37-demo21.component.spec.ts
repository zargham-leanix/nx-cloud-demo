import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo21Component } from './lib37-demo21.component';

describe('Lib37Demo21Component', () => {
  let component: Lib37Demo21Component;
  let fixture: ComponentFixture<Lib37Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
