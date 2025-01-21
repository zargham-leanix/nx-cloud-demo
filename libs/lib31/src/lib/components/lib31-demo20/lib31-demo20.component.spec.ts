import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo20Component } from './lib31-demo20.component';

describe('Lib31Demo20Component', () => {
  let component: Lib31Demo20Component;
  let fixture: ComponentFixture<Lib31Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
