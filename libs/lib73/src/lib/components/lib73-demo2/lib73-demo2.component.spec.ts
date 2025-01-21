import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo2Component } from './lib73-demo2.component';

describe('Lib73Demo2Component', () => {
  let component: Lib73Demo2Component;
  let fixture: ComponentFixture<Lib73Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
