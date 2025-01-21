import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo9Component } from './lib73-demo9.component';

describe('Lib73Demo9Component', () => {
  let component: Lib73Demo9Component;
  let fixture: ComponentFixture<Lib73Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
