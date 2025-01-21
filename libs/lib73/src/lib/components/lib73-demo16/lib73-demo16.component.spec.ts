import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo16Component } from './lib73-demo16.component';

describe('Lib73Demo16Component', () => {
  let component: Lib73Demo16Component;
  let fixture: ComponentFixture<Lib73Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
