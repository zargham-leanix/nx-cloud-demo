import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo20Component } from './lib64-demo20.component';

describe('Lib64Demo20Component', () => {
  let component: Lib64Demo20Component;
  let fixture: ComponentFixture<Lib64Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
