import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo20Component } from './lib95-demo20.component';

describe('Lib95Demo20Component', () => {
  let component: Lib95Demo20Component;
  let fixture: ComponentFixture<Lib95Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
