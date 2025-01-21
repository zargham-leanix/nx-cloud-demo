import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo42Component } from './lib37-demo42.component';

describe('Lib37Demo42Component', () => {
  let component: Lib37Demo42Component;
  let fixture: ComponentFixture<Lib37Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
