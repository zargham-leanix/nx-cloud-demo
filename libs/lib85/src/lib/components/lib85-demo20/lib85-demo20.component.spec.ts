import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo20Component } from './lib85-demo20.component';

describe('Lib85Demo20Component', () => {
  let component: Lib85Demo20Component;
  let fixture: ComponentFixture<Lib85Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
