import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo20Component } from './lib88-demo20.component';

describe('Lib88Demo20Component', () => {
  let component: Lib88Demo20Component;
  let fixture: ComponentFixture<Lib88Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
