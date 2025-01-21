import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo20Component } from './lib71-demo20.component';

describe('Lib71Demo20Component', () => {
  let component: Lib71Demo20Component;
  let fixture: ComponentFixture<Lib71Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
