import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo20Component } from './lib26-demo20.component';

describe('Lib26Demo20Component', () => {
  let component: Lib26Demo20Component;
  let fixture: ComponentFixture<Lib26Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
