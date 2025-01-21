import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo20Component } from './lib86-demo20.component';

describe('Lib86Demo20Component', () => {
  let component: Lib86Demo20Component;
  let fixture: ComponentFixture<Lib86Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
