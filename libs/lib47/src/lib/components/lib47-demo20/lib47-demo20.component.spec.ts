import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo20Component } from './lib47-demo20.component';

describe('Lib47Demo20Component', () => {
  let component: Lib47Demo20Component;
  let fixture: ComponentFixture<Lib47Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
