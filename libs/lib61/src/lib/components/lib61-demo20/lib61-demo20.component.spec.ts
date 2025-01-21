import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo20Component } from './lib61-demo20.component';

describe('Lib61Demo20Component', () => {
  let component: Lib61Demo20Component;
  let fixture: ComponentFixture<Lib61Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
