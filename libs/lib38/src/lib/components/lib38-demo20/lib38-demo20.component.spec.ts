import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo20Component } from './lib38-demo20.component';

describe('Lib38Demo20Component', () => {
  let component: Lib38Demo20Component;
  let fixture: ComponentFixture<Lib38Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
