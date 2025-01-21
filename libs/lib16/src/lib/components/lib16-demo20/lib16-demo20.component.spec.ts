import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo20Component } from './lib16-demo20.component';

describe('Lib16Demo20Component', () => {
  let component: Lib16Demo20Component;
  let fixture: ComponentFixture<Lib16Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
