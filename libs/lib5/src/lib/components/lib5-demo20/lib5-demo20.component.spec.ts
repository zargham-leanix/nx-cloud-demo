import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo20Component } from './lib5-demo20.component';

describe('Lib5Demo20Component', () => {
  let component: Lib5Demo20Component;
  let fixture: ComponentFixture<Lib5Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
