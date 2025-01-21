import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo17Component } from './lib73-demo17.component';

describe('Lib73Demo17Component', () => {
  let component: Lib73Demo17Component;
  let fixture: ComponentFixture<Lib73Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
