import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo38Component } from './lib73-demo38.component';

describe('Lib73Demo38Component', () => {
  let component: Lib73Demo38Component;
  let fixture: ComponentFixture<Lib73Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
