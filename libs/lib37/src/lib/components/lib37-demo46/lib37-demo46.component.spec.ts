import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo46Component } from './lib37-demo46.component';

describe('Lib37Demo46Component', () => {
  let component: Lib37Demo46Component;
  let fixture: ComponentFixture<Lib37Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
