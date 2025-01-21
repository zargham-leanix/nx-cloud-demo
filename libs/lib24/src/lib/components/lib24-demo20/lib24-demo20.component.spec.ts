import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo20Component } from './lib24-demo20.component';

describe('Lib24Demo20Component', () => {
  let component: Lib24Demo20Component;
  let fixture: ComponentFixture<Lib24Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
