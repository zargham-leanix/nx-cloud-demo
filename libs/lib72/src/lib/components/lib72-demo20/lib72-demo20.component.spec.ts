import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo20Component } from './lib72-demo20.component';

describe('Lib72Demo20Component', () => {
  let component: Lib72Demo20Component;
  let fixture: ComponentFixture<Lib72Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
