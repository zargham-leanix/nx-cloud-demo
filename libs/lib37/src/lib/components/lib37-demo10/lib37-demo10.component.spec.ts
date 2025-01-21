import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo10Component } from './lib37-demo10.component';

describe('Lib37Demo10Component', () => {
  let component: Lib37Demo10Component;
  let fixture: ComponentFixture<Lib37Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
