import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo44Component } from './lib37-demo44.component';

describe('Lib37Demo44Component', () => {
  let component: Lib37Demo44Component;
  let fixture: ComponentFixture<Lib37Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
