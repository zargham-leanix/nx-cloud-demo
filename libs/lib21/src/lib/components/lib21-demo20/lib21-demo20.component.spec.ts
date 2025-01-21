import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo20Component } from './lib21-demo20.component';

describe('Lib21Demo20Component', () => {
  let component: Lib21Demo20Component;
  let fixture: ComponentFixture<Lib21Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
