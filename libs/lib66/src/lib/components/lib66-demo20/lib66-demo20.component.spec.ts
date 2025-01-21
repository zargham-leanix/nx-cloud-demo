import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo20Component } from './lib66-demo20.component';

describe('Lib66Demo20Component', () => {
  let component: Lib66Demo20Component;
  let fixture: ComponentFixture<Lib66Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
