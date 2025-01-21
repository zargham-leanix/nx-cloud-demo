import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo20Component } from './lib80-demo20.component';

describe('Lib80Demo20Component', () => {
  let component: Lib80Demo20Component;
  let fixture: ComponentFixture<Lib80Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
