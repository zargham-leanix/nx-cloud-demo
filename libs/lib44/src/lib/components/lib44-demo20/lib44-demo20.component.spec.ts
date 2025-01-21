import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo20Component } from './lib44-demo20.component';

describe('Lib44Demo20Component', () => {
  let component: Lib44Demo20Component;
  let fixture: ComponentFixture<Lib44Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
