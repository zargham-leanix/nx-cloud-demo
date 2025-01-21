import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo24Component } from './lib37-demo24.component';

describe('Lib37Demo24Component', () => {
  let component: Lib37Demo24Component;
  let fixture: ComponentFixture<Lib37Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
