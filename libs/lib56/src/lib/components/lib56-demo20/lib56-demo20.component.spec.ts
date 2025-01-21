import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo20Component } from './lib56-demo20.component';

describe('Lib56Demo20Component', () => {
  let component: Lib56Demo20Component;
  let fixture: ComponentFixture<Lib56Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
