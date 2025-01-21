import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo20Component } from './lib20-demo20.component';

describe('Lib20Demo20Component', () => {
  let component: Lib20Demo20Component;
  let fixture: ComponentFixture<Lib20Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
