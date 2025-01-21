import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo20Component } from './lib77-demo20.component';

describe('Lib77Demo20Component', () => {
  let component: Lib77Demo20Component;
  let fixture: ComponentFixture<Lib77Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
