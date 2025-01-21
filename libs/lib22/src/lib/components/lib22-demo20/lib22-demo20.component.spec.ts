import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo20Component } from './lib22-demo20.component';

describe('Lib22Demo20Component', () => {
  let component: Lib22Demo20Component;
  let fixture: ComponentFixture<Lib22Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
