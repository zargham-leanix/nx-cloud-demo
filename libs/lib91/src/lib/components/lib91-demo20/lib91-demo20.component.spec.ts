import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo20Component } from './lib91-demo20.component';

describe('Lib91Demo20Component', () => {
  let component: Lib91Demo20Component;
  let fixture: ComponentFixture<Lib91Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
