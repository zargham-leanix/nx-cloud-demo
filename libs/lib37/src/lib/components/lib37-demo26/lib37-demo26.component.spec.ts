import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo26Component } from './lib37-demo26.component';

describe('Lib37Demo26Component', () => {
  let component: Lib37Demo26Component;
  let fixture: ComponentFixture<Lib37Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
