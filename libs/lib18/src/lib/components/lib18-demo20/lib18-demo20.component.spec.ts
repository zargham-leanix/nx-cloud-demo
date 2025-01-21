import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo20Component } from './lib18-demo20.component';

describe('Lib18Demo20Component', () => {
  let component: Lib18Demo20Component;
  let fixture: ComponentFixture<Lib18Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
