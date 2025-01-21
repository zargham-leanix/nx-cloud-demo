import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo20Component } from './lib58-demo20.component';

describe('Lib58Demo20Component', () => {
  let component: Lib58Demo20Component;
  let fixture: ComponentFixture<Lib58Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
