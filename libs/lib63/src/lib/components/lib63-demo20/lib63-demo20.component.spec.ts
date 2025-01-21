import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo20Component } from './lib63-demo20.component';

describe('Lib63Demo20Component', () => {
  let component: Lib63Demo20Component;
  let fixture: ComponentFixture<Lib63Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
