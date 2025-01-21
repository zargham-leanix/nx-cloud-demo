import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo31Component } from './lib37-demo31.component';

describe('Lib37Demo31Component', () => {
  let component: Lib37Demo31Component;
  let fixture: ComponentFixture<Lib37Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
