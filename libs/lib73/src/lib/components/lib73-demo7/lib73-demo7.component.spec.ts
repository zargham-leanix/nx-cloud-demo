import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo7Component } from './lib73-demo7.component';

describe('Lib73Demo7Component', () => {
  let component: Lib73Demo7Component;
  let fixture: ComponentFixture<Lib73Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
