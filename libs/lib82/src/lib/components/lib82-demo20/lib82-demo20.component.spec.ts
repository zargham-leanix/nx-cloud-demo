import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo20Component } from './lib82-demo20.component';

describe('Lib82Demo20Component', () => {
  let component: Lib82Demo20Component;
  let fixture: ComponentFixture<Lib82Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
