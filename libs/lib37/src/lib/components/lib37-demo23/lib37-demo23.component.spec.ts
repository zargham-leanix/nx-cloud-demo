import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo23Component } from './lib37-demo23.component';

describe('Lib37Demo23Component', () => {
  let component: Lib37Demo23Component;
  let fixture: ComponentFixture<Lib37Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
