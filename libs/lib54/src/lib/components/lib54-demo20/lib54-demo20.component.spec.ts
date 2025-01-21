import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo20Component } from './lib54-demo20.component';

describe('Lib54Demo20Component', () => {
  let component: Lib54Demo20Component;
  let fixture: ComponentFixture<Lib54Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
