import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo20Component } from './lib59-demo20.component';

describe('Lib59Demo20Component', () => {
  let component: Lib59Demo20Component;
  let fixture: ComponentFixture<Lib59Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
