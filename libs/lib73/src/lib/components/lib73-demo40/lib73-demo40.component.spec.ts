import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo40Component } from './lib73-demo40.component';

describe('Lib73Demo40Component', () => {
  let component: Lib73Demo40Component;
  let fixture: ComponentFixture<Lib73Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
