import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo30Component } from './lib37-demo30.component';

describe('Lib37Demo30Component', () => {
  let component: Lib37Demo30Component;
  let fixture: ComponentFixture<Lib37Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
