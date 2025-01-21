import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo20Component } from './lib30-demo20.component';

describe('Lib30Demo20Component', () => {
  let component: Lib30Demo20Component;
  let fixture: ComponentFixture<Lib30Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
