import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo43Component } from './lib37-demo43.component';

describe('Lib37Demo43Component', () => {
  let component: Lib37Demo43Component;
  let fixture: ComponentFixture<Lib37Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
