import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo49Component } from './lib73-demo49.component';

describe('Lib73Demo49Component', () => {
  let component: Lib73Demo49Component;
  let fixture: ComponentFixture<Lib73Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
