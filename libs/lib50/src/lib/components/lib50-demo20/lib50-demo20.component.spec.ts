import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo20Component } from './lib50-demo20.component';

describe('Lib50Demo20Component', () => {
  let component: Lib50Demo20Component;
  let fixture: ComponentFixture<Lib50Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
