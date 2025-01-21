import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo14Component } from './lib73-demo14.component';

describe('Lib73Demo14Component', () => {
  let component: Lib73Demo14Component;
  let fixture: ComponentFixture<Lib73Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
