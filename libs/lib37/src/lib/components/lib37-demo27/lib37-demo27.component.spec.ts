import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo27Component } from './lib37-demo27.component';

describe('Lib37Demo27Component', () => {
  let component: Lib37Demo27Component;
  let fixture: ComponentFixture<Lib37Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
