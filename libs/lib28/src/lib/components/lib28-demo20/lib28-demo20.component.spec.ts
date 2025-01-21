import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo20Component } from './lib28-demo20.component';

describe('Lib28Demo20Component', () => {
  let component: Lib28Demo20Component;
  let fixture: ComponentFixture<Lib28Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
