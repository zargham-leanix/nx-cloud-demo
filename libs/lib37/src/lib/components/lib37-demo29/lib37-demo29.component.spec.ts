import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo29Component } from './lib37-demo29.component';

describe('Lib37Demo29Component', () => {
  let component: Lib37Demo29Component;
  let fixture: ComponentFixture<Lib37Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
