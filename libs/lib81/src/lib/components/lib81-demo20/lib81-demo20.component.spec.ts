import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo20Component } from './lib81-demo20.component';

describe('Lib81Demo20Component', () => {
  let component: Lib81Demo20Component;
  let fixture: ComponentFixture<Lib81Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
