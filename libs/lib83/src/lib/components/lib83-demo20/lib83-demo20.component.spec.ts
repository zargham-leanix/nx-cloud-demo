import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo20Component } from './lib83-demo20.component';

describe('Lib83Demo20Component', () => {
  let component: Lib83Demo20Component;
  let fixture: ComponentFixture<Lib83Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
