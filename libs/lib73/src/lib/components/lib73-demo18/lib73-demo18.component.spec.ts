import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo18Component } from './lib73-demo18.component';

describe('Lib73Demo18Component', () => {
  let component: Lib73Demo18Component;
  let fixture: ComponentFixture<Lib73Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
