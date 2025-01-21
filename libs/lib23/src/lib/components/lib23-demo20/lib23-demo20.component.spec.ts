import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo20Component } from './lib23-demo20.component';

describe('Lib23Demo20Component', () => {
  let component: Lib23Demo20Component;
  let fixture: ComponentFixture<Lib23Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
