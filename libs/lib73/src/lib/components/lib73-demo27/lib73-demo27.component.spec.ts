import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo27Component } from './lib73-demo27.component';

describe('Lib73Demo27Component', () => {
  let component: Lib73Demo27Component;
  let fixture: ComponentFixture<Lib73Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
