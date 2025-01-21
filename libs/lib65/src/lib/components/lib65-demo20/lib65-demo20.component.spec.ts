import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo20Component } from './lib65-demo20.component';

describe('Lib65Demo20Component', () => {
  let component: Lib65Demo20Component;
  let fixture: ComponentFixture<Lib65Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
