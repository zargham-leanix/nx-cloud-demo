import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo20Component } from './lib93-demo20.component';

describe('Lib93Demo20Component', () => {
  let component: Lib93Demo20Component;
  let fixture: ComponentFixture<Lib93Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
