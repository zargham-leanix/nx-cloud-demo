import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo20Component } from './lib27-demo20.component';

describe('Lib27Demo20Component', () => {
  let component: Lib27Demo20Component;
  let fixture: ComponentFixture<Lib27Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
