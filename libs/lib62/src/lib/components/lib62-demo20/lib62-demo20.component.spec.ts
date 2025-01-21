import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo20Component } from './lib62-demo20.component';

describe('Lib62Demo20Component', () => {
  let component: Lib62Demo20Component;
  let fixture: ComponentFixture<Lib62Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
