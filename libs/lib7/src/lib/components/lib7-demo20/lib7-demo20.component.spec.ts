import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo20Component } from './lib7-demo20.component';

describe('Lib7Demo20Component', () => {
  let component: Lib7Demo20Component;
  let fixture: ComponentFixture<Lib7Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
