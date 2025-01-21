import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo39Component } from './lib37-demo39.component';

describe('Lib37Demo39Component', () => {
  let component: Lib37Demo39Component;
  let fixture: ComponentFixture<Lib37Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
