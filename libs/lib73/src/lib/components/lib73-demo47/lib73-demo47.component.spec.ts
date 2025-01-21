import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo47Component } from './lib73-demo47.component';

describe('Lib73Demo47Component', () => {
  let component: Lib73Demo47Component;
  let fixture: ComponentFixture<Lib73Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
