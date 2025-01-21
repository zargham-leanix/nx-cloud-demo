import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo20Component } from './lib52-demo20.component';

describe('Lib52Demo20Component', () => {
  let component: Lib52Demo20Component;
  let fixture: ComponentFixture<Lib52Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
