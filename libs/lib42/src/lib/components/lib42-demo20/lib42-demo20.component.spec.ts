import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo20Component } from './lib42-demo20.component';

describe('Lib42Demo20Component', () => {
  let component: Lib42Demo20Component;
  let fixture: ComponentFixture<Lib42Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
