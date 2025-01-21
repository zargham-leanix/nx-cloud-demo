import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo20Component } from './lib14-demo20.component';

describe('Lib14Demo20Component', () => {
  let component: Lib14Demo20Component;
  let fixture: ComponentFixture<Lib14Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
