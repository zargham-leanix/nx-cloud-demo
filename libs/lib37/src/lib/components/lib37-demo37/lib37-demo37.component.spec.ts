import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo37Component } from './lib37-demo37.component';

describe('Lib37Demo37Component', () => {
  let component: Lib37Demo37Component;
  let fixture: ComponentFixture<Lib37Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
