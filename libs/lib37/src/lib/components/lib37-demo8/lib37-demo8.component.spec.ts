import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo8Component } from './lib37-demo8.component';

describe('Lib37Demo8Component', () => {
  let component: Lib37Demo8Component;
  let fixture: ComponentFixture<Lib37Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
