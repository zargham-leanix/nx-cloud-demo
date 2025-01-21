import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo20Component } from './lib29-demo20.component';

describe('Lib29Demo20Component', () => {
  let component: Lib29Demo20Component;
  let fixture: ComponentFixture<Lib29Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
