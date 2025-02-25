import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo20Component } from './lib12-demo20.component';

describe('Lib12Demo20Component', () => {
  let component: Lib12Demo20Component;
  let fixture: ComponentFixture<Lib12Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
