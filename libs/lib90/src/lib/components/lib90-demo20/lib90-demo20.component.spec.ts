import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo20Component } from './lib90-demo20.component';

describe('Lib90Demo20Component', () => {
  let component: Lib90Demo20Component;
  let fixture: ComponentFixture<Lib90Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
