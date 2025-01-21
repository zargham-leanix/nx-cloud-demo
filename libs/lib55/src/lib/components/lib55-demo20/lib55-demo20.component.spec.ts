import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo20Component } from './lib55-demo20.component';

describe('Lib55Demo20Component', () => {
  let component: Lib55Demo20Component;
  let fixture: ComponentFixture<Lib55Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
