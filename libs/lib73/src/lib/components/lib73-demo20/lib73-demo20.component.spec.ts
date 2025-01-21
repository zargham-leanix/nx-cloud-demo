import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo20Component } from './lib73-demo20.component';

describe('Lib73Demo20Component', () => {
  let component: Lib73Demo20Component;
  let fixture: ComponentFixture<Lib73Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
