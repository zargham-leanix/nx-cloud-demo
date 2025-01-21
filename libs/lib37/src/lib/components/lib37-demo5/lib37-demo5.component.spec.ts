import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo5Component } from './lib37-demo5.component';

describe('Lib37Demo5Component', () => {
  let component: Lib37Demo5Component;
  let fixture: ComponentFixture<Lib37Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
