import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo20Component } from './lib41-demo20.component';

describe('Lib41Demo20Component', () => {
  let component: Lib41Demo20Component;
  let fixture: ComponentFixture<Lib41Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
