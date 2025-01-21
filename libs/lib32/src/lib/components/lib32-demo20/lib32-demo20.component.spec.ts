import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo20Component } from './lib32-demo20.component';

describe('Lib32Demo20Component', () => {
  let component: Lib32Demo20Component;
  let fixture: ComponentFixture<Lib32Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
