import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo36Component } from './lib73-demo36.component';

describe('Lib73Demo36Component', () => {
  let component: Lib73Demo36Component;
  let fixture: ComponentFixture<Lib73Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
