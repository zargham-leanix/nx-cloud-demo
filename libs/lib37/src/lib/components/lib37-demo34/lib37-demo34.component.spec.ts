import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo34Component } from './lib37-demo34.component';

describe('Lib37Demo34Component', () => {
  let component: Lib37Demo34Component;
  let fixture: ComponentFixture<Lib37Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
