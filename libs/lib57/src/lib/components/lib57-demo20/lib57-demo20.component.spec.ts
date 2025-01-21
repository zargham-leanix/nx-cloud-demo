import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo20Component } from './lib57-demo20.component';

describe('Lib57Demo20Component', () => {
  let component: Lib57Demo20Component;
  let fixture: ComponentFixture<Lib57Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
