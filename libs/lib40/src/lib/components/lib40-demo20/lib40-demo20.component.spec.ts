import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo20Component } from './lib40-demo20.component';

describe('Lib40Demo20Component', () => {
  let component: Lib40Demo20Component;
  let fixture: ComponentFixture<Lib40Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
