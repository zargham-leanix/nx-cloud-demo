import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo19Component } from './lib37-demo19.component';

describe('Lib37Demo19Component', () => {
  let component: Lib37Demo19Component;
  let fixture: ComponentFixture<Lib37Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
