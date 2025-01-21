import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo25Component } from './lib37-demo25.component';

describe('Lib37Demo25Component', () => {
  let component: Lib37Demo25Component;
  let fixture: ComponentFixture<Lib37Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
