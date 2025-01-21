import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo20Component } from './lib53-demo20.component';

describe('Lib53Demo20Component', () => {
  let component: Lib53Demo20Component;
  let fixture: ComponentFixture<Lib53Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
