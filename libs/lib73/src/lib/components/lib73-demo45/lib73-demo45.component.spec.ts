import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo45Component } from './lib73-demo45.component';

describe('Lib73Demo45Component', () => {
  let component: Lib73Demo45Component;
  let fixture: ComponentFixture<Lib73Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
