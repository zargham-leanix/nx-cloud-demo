import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo35Component } from './lib37-demo35.component';

describe('Lib37Demo35Component', () => {
  let component: Lib37Demo35Component;
  let fixture: ComponentFixture<Lib37Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
