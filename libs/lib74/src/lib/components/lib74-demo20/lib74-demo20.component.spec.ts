import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo20Component } from './lib74-demo20.component';

describe('Lib74Demo20Component', () => {
  let component: Lib74Demo20Component;
  let fixture: ComponentFixture<Lib74Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
