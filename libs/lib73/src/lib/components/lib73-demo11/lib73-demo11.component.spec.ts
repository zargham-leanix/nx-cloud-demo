import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo11Component } from './lib73-demo11.component';

describe('Lib73Demo11Component', () => {
  let component: Lib73Demo11Component;
  let fixture: ComponentFixture<Lib73Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
