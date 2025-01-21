import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo20Component } from './lib100-demo20.component';

describe('Lib100Demo20Component', () => {
  let component: Lib100Demo20Component;
  let fixture: ComponentFixture<Lib100Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
