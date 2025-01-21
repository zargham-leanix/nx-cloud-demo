import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo20Component } from './lib84-demo20.component';

describe('Lib84Demo20Component', () => {
  let component: Lib84Demo20Component;
  let fixture: ComponentFixture<Lib84Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
