import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo20Component } from './lib49-demo20.component';

describe('Lib49Demo20Component', () => {
  let component: Lib49Demo20Component;
  let fixture: ComponentFixture<Lib49Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
