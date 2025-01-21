import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo43Component } from './lib73-demo43.component';

describe('Lib73Demo43Component', () => {
  let component: Lib73Demo43Component;
  let fixture: ComponentFixture<Lib73Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
